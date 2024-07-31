package com.main.manufacturerservice.service;

import com.main.manufacturerservice.dto.Request;
import com.main.manufacturerservice.dto.Response;

import java.util.List;
import java.util.UUID;

public interface ManufacturerService {
    public Response saveManufacturer(Request input);
    public Response getManufacturer(UUID id);
    public Response updateManufacturer(UUID id, Request input);
    public void deleteManufacturer(UUID id);
    public Response getManufacturerByCode(String code);
    public List<Response> getAllManufacturers();
}
