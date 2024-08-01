package com.main.productservice.dto.product;

import com.main.productservice.dto.category.CategoryDto;
import com.main.productservice.dto.manufacturer.ManufacturerDto;
import com.main.productservice.model.Detail;
import com.main.productservice.model.More;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductResponse {
    private String id;
    private String name;
    private CategoryDto category;
    private ManufacturerDto manufacturer;
    private String code;
    private int sort;
    private String description;

}
