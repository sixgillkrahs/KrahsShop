package com.example.categoryservice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PagingDto {
    private int pageIndex;
    private int pageSize ;
    private String sortBy ;
    private String sortType;
}
