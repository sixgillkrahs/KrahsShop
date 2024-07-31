package com.main.manufacturerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Setter;

import java.util.UUID;

@Setter
@Builder
@AllArgsConstructor
public class Response {
    private UUID id;
    private String name;
    private String code;
    private String country;
    private Boolean isActive;
    private Boolean visibility;
}
