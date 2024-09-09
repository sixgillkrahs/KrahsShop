package com.example.categoryservice.service.impl;

import com.example.categoryservice.dto.CategoryRequest;
import com.example.categoryservice.dto.CategoryResponse;
import com.example.categoryservice.dto.PagingDto;
import com.example.categoryservice.mapper.CategoryMapper;
import com.example.categoryservice.model.Category;
import com.example.categoryservice.repository.CategoryRepository;
import com.example.categoryservice.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public CategoryResponse saveCategory(CategoryRequest input) {
        Category category = Category.builder()
                .id(UUID.randomUUID())
                .name(input.getName())
                .slug(convertSlug(input.getName()))
                .sort(input.getSort())
                .parentId(input.getParentId())
                .coverPicture(input.getCoverPicture())
                .icons(input.getIcons())
                .isDeleted(false)
                .metaTitle(input.getMetaTitle())
                .build();
        try {
            categoryRepository.save(category);
        }catch (Exception e){
            throw new RuntimeException();
        }
        return CategoryMapper.toCategoryResponse(category);
    }

    @Override
    public List<CategoryResponse> getCategories() {
        try {
            List<Category> categories = categoryRepository.findAll(Sort.by(Sort.Direction.DESC,"sort"));
            List<CategoryResponse> categoryResponses = new ArrayList<>();
            categories.forEach(category -> {
                categoryResponses.add(CategoryMapper.toCategoryResponse(category));
            });
            return categoryResponses;
        }catch (Exception e){
            throw new RuntimeException();
        }
    }

    @Override
    public Page<CategoryResponse> getCategoriesWithPaging(Pageable pageable) {
        Page<Category> categories = categoryRepository.findAll(pageable);
        List<CategoryResponse> categoryResponses = categories.getContent().stream()
                .map(CategoryMapper::toCategoryResponse)
                .collect(Collectors.toList());
        return new PageImpl<>(categoryResponses, pageable, categories.getTotalElements());
    }

    @Override
    public CategoryResponse getCategoryById(UUID id) {
        return CategoryMapper.toCategoryResponse(categoryRepository.findById(id).orElseThrow());
    }

    @Override
    public CategoryResponse updateCategoryById(UUID id, CategoryRequest input) {
        Category category = categoryRepository.findById(id).orElseThrow();
        try {
            category.setName(input.getName());
            category.setSlug(convertSlug(input.getName()));
            category.setSort(input.getSort());
            category.setParentId(input.getParentId());
            category.setCoverPicture(input.getCoverPicture());
            category.setIcons(input.getIcons());
            category.setMetaTitle(input.getMetaTitle());
            categoryRepository.save(category);
        }catch (Exception e){
            throw e;
        }
        return CategoryMapper.toCategoryResponse(category);
    }

    @Override
    public Boolean deleteCategoryById(UUID id) {
        Category category = categoryRepository.findById(id).orElseThrow();
        try {
            category.setIsDeleted(true);
            categoryRepository.save(category);
        }catch (Exception e){
            throw e;
        }
        return true;
    }


    private String convertSlug(String name) {
        return name.replace(" ","-").toLowerCase();
    }
}
