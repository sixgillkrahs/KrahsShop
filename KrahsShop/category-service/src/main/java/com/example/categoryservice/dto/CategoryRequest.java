package com.example.categoryservice.dto;

import com.example.categoryservice.validate.UUID;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Pageable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CategoryRequest {
    @NotBlank(message = "name not null")
    private String name;
    private int sort = 0;
    private java.util.UUID parentId;
    @NotBlank(message = "coverPicture not null")
    private String coverPicture;
    private String icons;
    private String metaTitle;
}
