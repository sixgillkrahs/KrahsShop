package com.main.categoryservice.service;

import com.main.categoryservice.dto.Request;
import com.main.categoryservice.dto.Response;

import java.util.List;
import java.util.UUID;

public interface CategoryService {
    List<Response> getAllCategories();
    Response getCategoryById(UUID id);
    Response createCategory(Request request);
    Response updateCategory(UUID id, Request request);
    void deleteCategory(UUID id);
    Response getCategoryByName(String name);
}
