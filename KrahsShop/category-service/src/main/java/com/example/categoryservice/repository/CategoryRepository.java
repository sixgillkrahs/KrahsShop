package com.example.categoryservice.repository;

import com.example.categoryservice.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.UUID;


@RepositoryRestController
public interface CategoryRepository extends JpaRepository<Category, UUID>, PagingAndSortingRepository<Category,UUID> {
}
