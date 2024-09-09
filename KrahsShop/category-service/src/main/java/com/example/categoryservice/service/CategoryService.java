package com.example.categoryservice.service;

import com.example.categoryservice.dto.CategoryRequest;
import com.example.categoryservice.dto.CategoryResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

public interface CategoryService {
    public CategoryResponse saveCategory(CategoryRequest input);
    public List<CategoryResponse> getCategories();
    public Page<CategoryResponse> getCategoriesWithPaging(Pageable pageable);
    public CategoryResponse getCategoryById(UUID id);
    public CategoryResponse updateCategoryById(UUID id, CategoryRequest input);
    public Boolean deleteCategoryById(UUID id);
}
