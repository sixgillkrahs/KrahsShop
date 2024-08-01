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
    public Response getManufacturerByCode(String code) {
        Manufacturer manufacturer = manufacturerRepository.findByCode(code);
        if(manufacturer != null){
            return Response.builder()
                    .id(manufacturer.getId())
                    .name(manufacturer.getName())
                    .code(manufacturer.getCode())
                    .country(manufacturer.getCountry())
                    .isActive(manufacturer.getIsActive())
                    .visibility(manufacturer.getVisibility())
                    .build();
        }
        return null;
    }

    @Override
    public Response saveManufacturer(Request input) {
        if (getManufacturerByCode(input.getCode()) != null) {
            throw new RuntimeException("Manufacturer already exists");
        }
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
        Manufacturer manufacturer = manufacturerRepository.findById(id).orElseThrow(()-> new RuntimeException("Manufacturer not found"));
        return Response.builder()
                .id(manufacturer.getId())
                .name(manufacturer.getName())
                .code(manufacturer.getCode())
                .country(manufacturer.getCountry())
                .isActive(manufacturer.getIsActive())
                .visibility(manufacturer.getVisibility())
                .build();
    }

    @Override
    public Response updateManufacturer(UUID id, Request input) {
        Manufacturer manufacturer = manufacturerRepository.findById(id).orElseThrow(()-> new RuntimeException("Manufacturer not found"));
        if (getManufacturerByCode(input.getCode()) != null) {
            throw new RuntimeException("Manufacturer already exists");
        }
        manufacturer.setName(input.getName());
        manufacturer.setCode(input.getCode());
        manufacturer.setCountry(input.getCountry());
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
    public void deleteManufacturer(UUID id) {
        Manufacturer manufacturer = manufacturerRepository.findById(id).orElseThrow(()-> new RuntimeException("Manufacturer not found"));
        manufacturerRepository.delete(manufacturer);
    }



    @Override
    public List<Response> getAllManufacturers() {
        List<Manufacturer> all = manufacturerRepository.findAll();
        if(all != null && !all.isEmpty()){
            return all.stream().map(manufacturer -> Response.builder()
                    .id(manufacturer.getId())
                    .name(manufacturer.getName())
                    .code(manufacturer.getCode())
                    .country(manufacturer.getCountry())
                    .isActive(manufacturer.getIsActive())
                    .visibility(manufacturer.getVisibility())
                    .build()).toList();
        }
        return List.of();
    }
}
