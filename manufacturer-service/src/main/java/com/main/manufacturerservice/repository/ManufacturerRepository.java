package com.main.manufacturerservice.repository;

import com.main.manufacturerservice.model.Manufacturer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;

@RepositoryRestResource
public interface ManufacturerRepository extends JpaRepository<Manufacturer, UUID> , PagingAndSortingRepository<Manufacturer, UUID> {
    Manufacturer findByCode(String code);
}
