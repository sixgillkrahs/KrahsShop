package com.main.manufacturerservice.service.impl;

import com.main.manufacturerservice.dto.Request;
import com.main.manufacturerservice.dto.Response;
import com.main.manufacturerservice.model.Manufacturer;
import com.main.manufacturerservice.repository.ManufacturerRepository;
import com.main.manufacturerservice.service.ManufacturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ManufacturerServiceImpl implements ManufacturerService {

    @Autowired
    private  ManufacturerRepository manufacturerRepository;

    @Override
    public Response saveManufacturer(Request input) {
        Manufacturer manufacturer = new Manufacturer();
        manufacturer.setName(input.getName());
        manufacturer.setCode(input.getCode());
        manufacturer.setCountry(input.getCountry());
        manufacturer.setIsActive(true);
        manufacturer.setVisibility(true);
        Manufacturer savedManufacturer = manufacturerRepository.save(manufacturer);
        return Response.builder()
                .id(savedManufacturer.getId())
                .name(savedManufacturer.getName())
                .code(savedManufacturer.getCode())
                .country(savedManufacturer.getCountry())
                .isActive(savedManufacturer.getIsActive())
                .visibility(savedManufacturer.getVisibility())
                .build();
    }

    @Override
    public Response getManufacturer(UUID id) {
        return null;
    }

    @Override
    public Response updateManufacturer(UUID id, Request input) {
        return null;
    }

    @Override
    public void deleteManufacturer(UUID id) {

    }

    @Override
    public Response getManufacturerByCode(String code) {
        return null;
    }

    @Override
    public List<Response> getAllManufacturers() {
        return List.of();
    }
}
