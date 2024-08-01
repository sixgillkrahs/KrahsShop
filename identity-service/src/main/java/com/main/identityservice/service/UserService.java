package com.main.identityservice.service;

import com.main.identityservice.dto.LoginRequest;
import com.main.identityservice.dto.LoginResponse;
import com.main.identityservice.dto.UserRequest;
import com.main.identityservice.dto.UserResponse;

public interface UserService {
    public UserResponse createUser(UserRequest input);
    public UserResponse getUserProfile(String jwt);
    public LoginResponse login(LoginRequest input);
    public UserResponse updateUserProfile(UserRequest input, String jwt);
}
