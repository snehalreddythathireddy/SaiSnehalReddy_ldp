package com.example.lombok_practice.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final String serviceName = "ProductService";

    public void printInfo() {
        log.info("Running inside: {}", serviceName);
    }

    @Data
    public static class Category {
        private int id;
        private String name;
    }
}