package com.main.categoryservice.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@AllArgsConstructor
@Getter
public class Request {
    @NotBlank
    private String name;
    private int sort;
    private UUID parentId;
    private String CoverImage;
    private String icon;
    private String metaTitle;
}
