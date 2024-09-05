package com.main.userservice.service.impl;


import com.main.userservice.config.JwtProvider;
import com.main.userservice.dto.LoginRequest;
import com.main.userservice.dto.LoginResponse;
import com.main.userservice.dto.UserRequest;
import com.main.userservice.dto.UserResponse;
import com.main.userservice.exception.ErrorCode;
import com.main.userservice.exception.HandleRuntimeException;
import com.main.userservice.model.User;
import com.main.userservice.repository.UserRepository;
import com.main.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            com.main.userservice.model.User user = userRepository.findByEmail(username);
            if(user == null){
                throw new UsernameNotFoundException("User not found");
            }
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(user.getRole().toString()));
            return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

    @Override
    public UserResponse createUser(UserRequest input) {
        User isEmailExist = userRepository.findByEmail(input.getEmail());
        if (isEmailExist != null) {
            throw new HandleRuntimeException(ErrorCode.USER_ALREADY_EXISTS);
        }
        User createUser = User.builder()
                .id(UUID.randomUUID())
                .address(input.getAddress())
                .email(input.getEmail())
                .firstName(input.getFirstName())
                .lastName(input.getLastName())
                .password(passwordEncoder.encode(input.getPassword()))
                .phone(input.getPhone())
                .role(input.getRole())
                .sex(input.getSex())
                .isDeleted(false)
                .build();
       try {
           User savedUser = userRepository.save(createUser);
       }catch (Exception e){
           throw new RuntimeException("Error while saving user");
       }
        Authentication authentication = new UsernamePasswordAuthenticationToken(input.getEmail(), input.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return UserResponse.builder()
                .id(createUser.getId())
                .address(createUser.getAddress())
                .email(createUser.getEmail())
                .firstName(createUser.getFirstName())
                .password(createUser.getPassword())
                .lastName(createUser.getLastName())
                .phone(createUser.getPhone())
                .role(createUser.getRole().toString())
                .sex(createUser.getSex())
                .build();
    }

    @Override
    public UserResponse getUserProfile(String jwt) {
        String email = JwtProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(email);
        return UserResponse.builder()
                .id(user.getId())
                .address(user.getAddress())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .password(user.getPassword())
                .lastName(user.getLastName())
                .phone(user.getPhone())
                .role(user.getRole().toString())
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest input) {
        String email = input.getEmail();
        String password = input.getPassword();
        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtProvider.generateToken(authentication);
        return LoginResponse.builder()
                .status(true)
                .message("Login Successfully")
                .jwt(token)
                .build();
    }

    @Override
    public UserResponse updateUserProfile(UserRequest input, String jwt) {
        try {
            User user = userRepository.findByEmail(JwtProvider.getEmailFromJwtToken(jwt));
            if(user == null){
                throw new RuntimeException("User not found");
            }
            user.setAddress(input.getAddress());
            user.setEmail(input.getEmail());
            user.setAddress(input.getFirstName());
            user.setLastName(input.getLastName());
            user.setPassword(passwordEncoder.encode(input.getPassword()));
            user.setPhone(input.getPhone());
            user.setRole(input.getRole());
            userRepository.save(user);
            return UserResponse.builder()
                    .id(user.getId())
                    .address(user.getAddress())
                    .email(user.getEmail())
                    .firstName(user.getAddress())
                    .password(user.getPassword())
                    .lastName(user.getLastName())
                    .phone(user.getPhone())
                    .role(user.getRole().toString())
                    .build();
        }catch (Exception e){
            throw new RuntimeException("Error while updating user");
        }
    }

    @Override
    public Boolean deleteUserProfile(String jwt) {
        try {
            User user = userRepository.findByEmail(JwtProvider.getEmailFromJwtToken(jwt));
            if(user == null){
                throw new RuntimeException("User not found");
            }
            user.setIsDeleted(true);
            userRepository.save(user);
            return true;
        }catch (Exception e){
            throw new RuntimeException("Error while deleting user");
        }
    }


    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = loadUserByUsername(email);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
