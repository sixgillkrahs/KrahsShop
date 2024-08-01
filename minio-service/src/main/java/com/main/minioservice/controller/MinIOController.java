package com.main.minioservice.controller;

import com.main.minioservice.dto.UploadDto;
import com.main.minioservice.service.MinioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/minio")
public class MinIOController {
    @Autowired
    private MinioService minIOService;

    @PostMapping
    public String uploadFile(@RequestBody UploadDto file) {
        minIOService.uploadImage(file);
        return "File uploaded successfully";
    }
}
