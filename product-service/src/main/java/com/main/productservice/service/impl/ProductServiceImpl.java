package com.main.productservice.service.impl;

import com.main.productservice.dto.category.CategoryDto;
import com.main.productservice.dto.manufacturer.ManufacturerDto;
import com.main.productservice.dto.product.ProductRequest;
import com.main.productservice.dto.product.ProductResponse;
import com.main.productservice.model.Product;
import com.main.productservice.repository.ProductRepository;
import com.main.productservice.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.UUID;

@Service
@Slf4j
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private  WebClient.Builder webClientBuilder;


    @Override
    public ProductResponse createProduct(ProductRequest input) {
        ManufacturerDto manufacturerDto = getManufacturer(input.getManufacturerId());
        CategoryDto categoryDto = getCategory(input.getCategoryId());
        Product product = new Product();
        product.setName(input.getName());
        product.setManufacturerId(input.getManufacturerId());
        product.setCategoryId(input.getCategoryId());
        product.setDescription(input.getDescription());
        product.setDetail(input.getDetail());
        product.setMore(input.getMore());
        product.setSort(input.getSort());
        product.setCode(input.getCode());
        product.setVisibility(true);
        product.setIsActive(true);
        product.setCategoryId(input.getCategoryId());
        Product savedProduct = productRepository.save(product);
        log.info("Product created with name: {}",input.getName());
        ProductResponse response = new ProductResponse();
        response.setId(savedProduct.getId());
        response.setName(savedProduct.getName());
        response.setCategory(categoryDto);
        response.setManufacturer(manufacturerDto);
        response.setCode(savedProduct.getCode());
        response.setSort(savedProduct.getSort());
        response.setDescription(savedProduct.getDescription());
        return response;
    }

    private ManufacturerDto getManufacturer(UUID id){
        try {
            ManufacturerDto dto = webClientBuilder.build()
                    .get()
                    .uri("http://localhost:5001/api/manufacturer/{id}",id)
                    .retrieve()
                    .bodyToMono(ManufacturerDto.class)
                    .block();
            if (dto != null){
                return dto;
            }
            throw new Exception("Manufacturer not found");
        }catch (Exception e){
            log.error("Error while calling manufacturer service",e);
        }
        return null;
    }

    private CategoryDto getCategory(UUID id){
        try {
            CategoryDto dto = webClientBuilder.build()
                    .get()
                    .uri("http://localhost:5002/api/category/{id}",id)
                    .retrieve()
                    .bodyToMono(CategoryDto.class)
                    .block();
            if (dto != null){
                return dto;
            }
            throw new Exception("Category not found");
        }catch (Exception e){
            log.error("Error while calling category service",e);
        }
        return null;
    }

}
