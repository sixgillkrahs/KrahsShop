package com.example.categoryservice.controller;

import com.example.categoryservice.common.APIResponse;
import com.example.categoryservice.dto.CategoryRequest;
import com.example.categoryservice.dto.CategoryResponse;
import com.example.categoryservice.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public APIResponse<CategoryResponse> saveCategory(@Validated @RequestBody CategoryRequest input){
        CategoryResponse categoryResponse = categoryService.saveCategory(input);
        APIResponse<CategoryResponse> response = new APIResponse<>();
        response.setMessage("You create category successfully");
        response.setCode(201);
        response.setResult(categoryResponse);
        return response;
    }

    @GetMapping("/all")
    public APIResponse<List<CategoryResponse>> getAll(){
        List<CategoryResponse> categoryResponses = categoryService.getCategories();
        APIResponse<List<CategoryResponse>> response = new APIResponse<>();
        response.setMessage("You get all category successfully");
        response.setCode(200);
        response.setResult(categoryResponses);
        return response;
    }

    @GetMapping("/withPaging")
    public APIResponse<Page<CategoryResponse>> getCategoriesWithPaging(
            @RequestParam(required = false,defaultValue = "0") int pageIndex,
            @RequestParam(required = false,defaultValue = "20") int pageSize,
            @RequestParam(required = false) String sortBy,
            @RequestParam(required = false,defaultValue = "0") String sortType
    ) {
        Pageable pageable;
        if( sortBy == null){
            pageable = PageRequest.of(pageIndex, pageSize);
        }else{
            Sort sort = sortType.equalsIgnoreCase("1") ?Sort.by(sortBy).descending():Sort.by(sortBy).ascending();
            pageable = PageRequest.of(pageIndex, pageSize, sort);
        }
        Page<CategoryResponse> categoryResponses = categoryService.getCategoriesWithPaging(pageable);
        APIResponse<Page<CategoryResponse>> response = new APIResponse<>();
        response.setMessage("You get all  successfully");
        response.setCode(200);
        response.setResult(categoryResponses);
        return response;
    }

    @GetMapping("/{id}")
    public APIResponse<CategoryResponse> getCategoryById(@PathVariable UUID id){
        APIResponse<CategoryResponse> response = new APIResponse<>();
        response.setCode(200);
        response.setMessage("Success");
        response.setResult(categoryService.getCategoryById(id));
        return response;
    }

    @PutMapping("/{id}")
    public APIResponse<CategoryResponse> updateCategoryById(@PathVariable UUID id,@RequestBody CategoryRequest input){
        APIResponse<CategoryResponse> response = new APIResponse<>();
        response.setCode(204);
        response.setMessage("success");
        response.setResult(categoryService.updateCategoryById(id, input));
        return response;
    }

    @DeleteMapping("/{id}")
    public APIResponse deleteCategoryById(@PathVariable UUID id){
        categoryService.deleteCategoryById(id);
        APIResponse response = new APIResponse();
        response.setCode(205);
        response.setMessage("success");
        return response;
    }

}
