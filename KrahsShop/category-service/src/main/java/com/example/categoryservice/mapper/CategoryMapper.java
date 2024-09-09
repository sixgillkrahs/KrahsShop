package com.example.categoryservice.mapper;

import com.example.categoryservice.dto.CategoryRequest;
import com.example.categoryservice.dto.CategoryResponse;
import com.example.categoryservice.model.Category;

public class CategoryMapper {
    public static CategoryResponse toCategoryResponse(Category category) {
        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setId(category.getId());
        categoryResponse.setName(category.getName());
        categoryResponse.setSlug(category.getSlug());
        categoryResponse.setSort(category.getSort());
        categoryResponse.setParentId(category.getParentId());
        categoryResponse.setCoverPicture(category.getCoverPicture());
        categoryResponse.setIcons(category.getIcons());
        categoryResponse.setIsDeleted(category.getIsDeleted());
        categoryResponse.setMetaTitle(category.getMetaTitle());
        return categoryResponse;
    }


}
