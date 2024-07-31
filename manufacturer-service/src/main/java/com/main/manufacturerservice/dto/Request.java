package com.main.manufacturerservice.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Request {
    @NotBlank(message = "Name is mandatory")
    private String name;
    @NotBlank(message = "Code is mandatory")
    private String code;
    @NotBlank(message = "Country is mandatory")
    private String country;
}
