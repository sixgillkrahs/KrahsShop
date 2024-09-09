package com.example.categoryservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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


