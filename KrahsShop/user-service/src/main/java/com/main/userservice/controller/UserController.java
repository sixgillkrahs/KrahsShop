package com.main.userservice.controller;

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
    public ResponseEntity<UserResponse> createUser(@Validated @RequestBody UserRequest input) {
        UserResponse userResponse = userService.createUser(input);
        return new ResponseEntity<>(userResponse, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Validated @RequestBody LoginRequest input) {
        LoginResponse response = userService.login(input);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserResponse> getUserProfile(@RequestHeader("Authorization") String jwt) {
        UserResponse userResponse = userService.getUserProfile(jwt);
        return new ResponseEntity<>(userResponse, HttpStatus.OK);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserResponse> updateUserProfile(@Validated @RequestBody UserRequest input, @RequestHeader("Authorization") String jwt) {
        UserResponse userResponse = userService.updateUserProfile(input, jwt);
        return new ResponseEntity<>(userResponse, HttpStatus.OK);
    }
}
