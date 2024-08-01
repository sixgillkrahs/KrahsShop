package com.main.manufacturerservice.dto;

import lombok.*;

import java.util.UUID;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Response {
    private UUID id;
    private String name;
    private String code;
    private String country;
    private Boolean isActive;
    private Boolean visibility;
}
