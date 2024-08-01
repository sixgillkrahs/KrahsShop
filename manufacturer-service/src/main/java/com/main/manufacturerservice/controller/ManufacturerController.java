package com.main.manufacturerservice.controller;

import com.main.manufacturerservice.dto.Request;
import com.main.manufacturerservice.dto.Response;
import com.main.manufacturerservice.service.ManufacturerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/manufacturer")
@Slf4j
public class ManufacturerController {
    @Autowired
    private ManufacturerService manufacturerService;


    @PostMapping
    public ResponseEntity<Response> saveManufacturer(@Validated @RequestBody Request input) {
        try {
            log.info("Request received to save manufacturer");
            return new ResponseEntity<>(manufacturerService.saveManufacturer(input), HttpStatus.CREATED);
        }catch (Exception e){
            log.error("Error occurred while saving manufacturer", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getManufacturer(@PathVariable UUID id) {
        log.info("Request received to get manufacturer by id");
        return new ResponseEntity<>(manufacturerService.getManufacturer(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> updateManufacturer(@PathVariable UUID id, @Validated @RequestBody Request input) {
        log.info("Request received to update manufacturer by id");
        return new ResponseEntity<>(manufacturerService.updateManufacturer(id, input), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManufacturer(@PathVariable UUID id) {
        log.info("Request received to delete manufacturer by id");
        manufacturerService.deleteManufacturer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<Response>> getManufacturers() {
        log.info("Request received to get all manufacturers");
        return new ResponseEntity<>(manufacturerService.getAllManufacturers(), HttpStatus.OK);
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<Response> getManufacturerByCode(@PathVariable String code) {
        log.info("Request received to get manufacturer by code");
        return new ResponseEntity<>(manufacturerService.getManufacturerByCode(code), HttpStatus.OK);
    }


}
