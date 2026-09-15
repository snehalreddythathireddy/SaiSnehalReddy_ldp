package com.example.lombok_practice.controller;

import com.example.lombok_practice.model.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
        productService.printInfo();
    }

    @GetMapping("/product-info")
    public String productInfo() {
        return "Check the console for service info";
    }
}