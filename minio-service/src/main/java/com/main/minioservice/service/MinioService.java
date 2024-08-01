package com.main.minioservice.service;

import com.main.minioservice.config.MinIOConstant;
import com.main.minioservice.dto.UploadDto;
import io.minio.MinioClient;
import io.minio.errors.MinioException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@Service
public class MinioService {
    private final MinioClient minioClient;

    public MinioService() {
        this.minioClient = MinioClient.builder()
                .endpoint(MinIOConstant.END_POINT)
                .credentials(MinIOConstant.MINIO_ACCESS, MinIOConstant.MINIO_SECRET)
                .build();
    }

    public void uploadImage(UploadDto uploadDto) {
        try {
            minioClient.uploadObject(
                    io.minio.UploadObjectArgs.builder()
                            .bucket(MinIOConstant.BUCKET_NAME)
                            .object(uploadDto.getObjectName())
                            .filename(uploadDto.getFilePath())
                            .build());
        } catch (MinioException | InvalidKeyException | NoSuchAlgorithmException | IOException e) {
            e.printStackTrace();
        }
    }
}
