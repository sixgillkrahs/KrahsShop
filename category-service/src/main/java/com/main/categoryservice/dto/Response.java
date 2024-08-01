package com.main.categoryservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Response {
    private UUID id;
    private String name;
    private String slug;
    private int sort;
    private UUID parentId;
    private String coverImage;
    private String icon;
    private Boolean isActive;
    private Boolean visibility;
    private String metaTitle;
}
