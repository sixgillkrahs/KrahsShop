package com.main.userservice.dto;

import com.main.userservice.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {
    @Pattern(regexp = "^[a-zA-Z0-9]{3,}$", message = "Username must be at least 3 characters long and contain only letters and numbers")
    private String password;
    @Email(message = "Invalid email address")
    private String email;
    private Role role = Role.ROLE_USER;
    @NotBlank(message = "Name is mandatory")
    private String name;
    @NotBlank(message = "Last name is mandatory")
    private String lastName;
    @NotBlank(message = "Phone is mandatory")
    @Size(min = 10, max = 10, message = "Phone must be 10 characters long")
    @Pattern(regexp = "^\\d{10}$")
    private String phone;
    @NotBlank(message = "Address is mandatory")
    private String address;
}
