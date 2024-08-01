package com.main.categoryservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Table(name = "category")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
