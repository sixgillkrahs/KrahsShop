package com.main.productservice.dto.product;

import com.main.productservice.model.Detail;
import com.main.productservice.model.More;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private String name;
    private UUID categoryId;
    private UUID manufacturerId;
    private String code;
    private int sort;
    private String description;
    private List<Detail> detail;
    private List<More> more;
}
