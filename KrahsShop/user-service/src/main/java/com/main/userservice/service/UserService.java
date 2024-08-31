package com.main.userservice.service;

import com.main.userservice.dto.LoginRequest;
import com.main.userservice.dto.LoginResponse;
import com.main.userservice.dto.UserRequest;
import com.main.userservice.dto.UserResponse;

public interface UserService {
    public UserResponse createUser(UserRequest input);
    public UserResponse getUserProfile(String jwt);
    public LoginResponse login(LoginRequest input);
    public UserResponse updateUserProfile(UserRequest input, String jwt);
}
