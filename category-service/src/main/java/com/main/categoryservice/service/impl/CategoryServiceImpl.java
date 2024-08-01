package com.main.categoryservice.service.impl;

import com.main.categoryservice.dto.Request;
import com.main.categoryservice.dto.Response;
import com.main.categoryservice.model.Category;
import com.main.categoryservice.repository.CategoryRepository;
import com.main.categoryservice.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Response> getAllCategories() {
        List<Category> all = categoryRepository.findAll();
        if(all != null && !all.isEmpty()){
            return all.stream().map(manufacturer -> Response.builder()
                    .id(manufacturer.getId())
                    .name(manufacturer.getName())
                    .parentId(manufacturer.getParentId())
                    .coverImage(manufacturer.getCoverImage())
                    .icon(manufacturer.getIcon())
                    .slug(manufacturer.getSlug())
                    .sort(manufacturer.getSort())
                    .metaTitle(manufacturer.getMetaTitle())
                    .isActive(manufacturer.getIsActive())
                    .visibility(manufacturer.getVisibility())
                    .build()).toList();
        }
        return List.of();
    }

    @Override
    public Response getCategoryById(UUID id) {
        Category manufacturer = categoryRepository.findById(id).orElseThrow(()-> new RuntimeException("Category not found"));
        return Response.builder()
                .id(manufacturer.getId())
                .name(manufacturer.getName())
                .parentId(manufacturer.getParentId())
                .coverImage(manufacturer.getCoverImage())
                .icon(manufacturer.getIcon())
                .slug(manufacturer.getSlug())
                .sort(manufacturer.getSort())
                .metaTitle(manufacturer.getMetaTitle())
                .isActive(manufacturer.getIsActive())
                .visibility(manufacturer.getVisibility())
                .build();
    }

    @Override
    public Response createCategory(Request request) {
        if (getCategoryByName(request.getName()) != null) {
            throw new RuntimeException("Category already exists");
        }
        Category category = new Category();
        category.setName(request.getName());
        category.setSlug(request.getName().toLowerCase().replace(" ", "-"));
        category.setSort(request.getSort());
        category.setParentId(request.getParentId());
        category.setCoverImage(request.getCoverImage());
        category.setIcon(request.getIcon());
        category.setMetaTitle(request.getMetaTitle());
        category.setIsActive(true);
        category.setVisibility(true);
        Category savedManufacturer = categoryRepository.save(category);
        return Response.builder()
                .id(category.getId())
                .name(category.getName())
                .parentId(category.getParentId())
                .coverImage(category.getCoverImage())
                .icon(category.getIcon())
                .slug(category.getSlug())
                .sort(category.getSort())
                .metaTitle(category.getMetaTitle())
                .isActive(category.getIsActive())
                .visibility(category.getVisibility())
                .build();
    }

    @Override
    public Response updateCategory(UUID id, Request request) {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new RuntimeException("Category not found"));
        if (getCategoryByName(request.getName()) != null) {
            throw new RuntimeException("Category already exists");
        }
        category.setName(request.getName());
        category.setSlug(request.getName().toLowerCase().replace(" ", "-"));
        category.setSort(request.getSort());
        category.setParentId(request.getParentId());
        category.setCoverImage(request.getCoverImage());
        category.setIcon(request.getIcon());
        category.setMetaTitle(request.getMetaTitle());
        category.setIsActive(true);
        category.setVisibility(true);
        Category savedCategory = categoryRepository.save(category);
        return Response.builder()
                .id(category.getId())
                .name(category.getName())
                .parentId(category.getParentId())
                .coverImage(category.getCoverImage())
                .icon(category.getIcon())
                .slug(category.getSlug())
                .sort(category.getSort())
                .metaTitle(category.getMetaTitle())
                .isActive(category.getIsActive())
                .visibility(category.getVisibility())
                .build();
    }

    @Override
    public void deleteCategory(UUID id) {
        Category manufacturer = categoryRepository.findById(id).orElseThrow(()-> new RuntimeException("Category not found"));
        categoryRepository.delete(manufacturer);
    }

    @Override
    public Response getCategoryByName(String name) {
        Category category = categoryRepository.findByName(name);
        if(category != null){
            return Response.builder()
                    .id(category.getId())
                    .name(category.getName())
                    .parentId(category.getParentId())
                    .coverImage(category.getCoverImage())
                    .icon(category.getIcon())
                    .slug(category.getSlug())
                    .sort(category.getSort())
                    .metaTitle(category.getMetaTitle())
                    .isActive(category.getIsActive())
                    .visibility(category.getVisibility())
                    .build();
        }
        return null;
    }
}
