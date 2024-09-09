package com.example.categoryservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Setter
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CategoryResponse {
    private UUID id;
    private String name;
    private String slug;
    private int sort;
    private UUID parentId;
    private String coverPicture;
    private String icons;
    private Boolean isDeleted;
    private String metaTitle;
}
