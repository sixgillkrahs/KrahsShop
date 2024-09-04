package com.main.userservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String password;
    private String email;
    private Role role;
    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private String sex;
    private Boolean isDeleted;

}
