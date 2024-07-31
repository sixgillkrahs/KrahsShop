package com.main.manufacturerservice.controller;

import com.main.manufacturerservice.dto.Request;
import com.main.manufacturerservice.dto.Response;
import com.main.manufacturerservice.service.ManufacturerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/manufacturer")
@Slf4j
public class ManufacturerController {
    @Autowired
    private ManufacturerService manufacturerService;


    @PostMapping
    public ResponseEntity<Response> saveManufacturer(@Validated @RequestBody Request input) {
        log.info("Request received to save manufacturer");

        return new ResponseEntity<>(manufacturerService.saveManufacturer(input), HttpStatus.CREATED);
    }


}
