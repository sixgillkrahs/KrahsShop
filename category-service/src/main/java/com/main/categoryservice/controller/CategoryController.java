package com.main.categoryservice.controller;

import com.main.categoryservice.dto.Request;
import com.main.categoryservice.dto.Response;
import com.main.categoryservice.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/category")
@Slf4j
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<Response> createCategory(@Validated @RequestBody Request request) {
        log.info("Create category");
        return new ResponseEntity<>(categoryService.createCategory(request), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getCategoryById(@PathVariable UUID id) {
        log.info("Get category by id");
        return new ResponseEntity<>(categoryService.getCategoryById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Response>> getAllCategories() {
        log.info("Get all categories");
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> updateCategory(@PathVariable UUID id, @Validated @RequestBody Request request) {
        log.info("Update category by id");
        return new ResponseEntity<>(categoryService.updateCategory(id, request), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable UUID id) {
        log.info("Delete category by id");
        categoryService.deleteCategory(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Response> getCategoryByName(@PathVariable String name) {
        log.info("Get category by name");
        return new ResponseEntity<>(categoryService.getCategoryByName(name), HttpStatus.OK);
    }

}
