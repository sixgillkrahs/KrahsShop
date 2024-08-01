package com.main.productservice.controller;

import com.main.productservice.dto.product.ProductRequest;
import com.main.productservice.dto.product.ProductResponse;
import com.main.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;


    @PostMapping()
    public ResponseEntity<ProductResponse> createProduct(@RequestBody ProductRequest input) {
        return new ResponseEntity<>(productService.createProduct(input), HttpStatus.CREATED);
    }
}
