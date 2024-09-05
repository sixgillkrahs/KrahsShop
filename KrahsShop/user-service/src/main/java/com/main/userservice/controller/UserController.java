package com.main.userservice.controller;

import com.main.userservice.common.APIResponse;
import com.main.userservice.dto.LoginRequest;
import com.main.userservice.dto.LoginResponse;
import com.main.userservice.dto.UserRequest;
import com.main.userservice.dto.UserResponse;
import com.main.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public APIResponse<UserResponse> createUser(@Validated @RequestBody UserRequest input) {
        UserResponse userResponse = userService.createUser(input);
        APIResponse<UserResponse> response = new APIResponse<UserResponse>();
        response.setCode(204);
        response.setResult(userResponse);
        response.setMessage("you created successfully");
        return response;
    }

    @PostMapping("/login")
    public APIResponse<LoginResponse> login(@Validated @RequestBody LoginRequest input) {
        LoginResponse response = userService.login(input);
        APIResponse<LoginResponse> apiResponse = new APIResponse<LoginResponse>();
        apiResponse.setCode(201);
        apiResponse.setResult(response);
        apiResponse.setMessage("you login successfully");
        return apiResponse;
    }

    @GetMapping("/profile")
    public APIResponse<UserResponse> getUserProfile(@RequestHeader("Authorization") String jwt) {
        UserResponse userResponse = userService.getUserProfile(jwt);
        APIResponse<UserResponse> apiResponse = new APIResponse<UserResponse>();
        apiResponse.setCode(201);
        apiResponse.setResult(userResponse);
        apiResponse.setMessage("you login successfully");
        return apiResponse;
    }

    @PutMapping("/profile")
    public APIResponse<UserResponse> updateUserProfile(@Validated @RequestBody UserRequest input, @RequestHeader("Authorization") String jwt) {
        UserResponse userResponse = userService.updateUserProfile(input, jwt);
        APIResponse<UserResponse> apiResponse = new APIResponse<UserResponse>();
        apiResponse.setCode(201);
        apiResponse.setResult(userResponse);
        apiResponse.setMessage("you login successfully");
        return apiResponse;
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return new ResponseEntity<>("User Service is Up and Running", HttpStatus.OK);
    }

    @DeleteMapping("/profile")
    public ResponseEntity<Boolean> deleteUserProfile(@RequestHeader("Authorization") String jwt) {
        Boolean response = userService.deleteUserProfile(jwt);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
