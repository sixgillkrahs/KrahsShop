package com.main.productservice.service;

import com.main.productservice.dto.product.ProductRequest;
import com.main.productservice.dto.product.ProductResponse;

public interface ProductService {
    public ProductResponse createProduct(ProductRequest input);
}
