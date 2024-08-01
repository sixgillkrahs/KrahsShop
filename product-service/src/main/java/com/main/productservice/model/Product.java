package com.main.productservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    private String id;
    private String name;
    private UUID categoryId;
    private UUID manufacturerId;
    private String code;
    private int sort;
    private String description;
    private Boolean isActive;
    private Boolean visibility;
    private List<Detail> detail;
    private List<More> more;
}
