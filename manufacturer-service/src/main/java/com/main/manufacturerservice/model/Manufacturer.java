package com.main.manufacturerservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Table(name = "manufacturer")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Manufacturer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String name;
    private String code;
    private String country;
    private Boolean isActive;
    private Boolean visibility;
}
