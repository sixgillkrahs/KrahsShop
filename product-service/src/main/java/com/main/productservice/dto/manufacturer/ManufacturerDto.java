package com.main.productservice.dto.manufacturer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ManufacturerDto {
    private UUID id;
    private String name;
    private String code;
    private String country;
}
