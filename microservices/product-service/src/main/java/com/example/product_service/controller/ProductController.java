package com.example.product_service.controller;

import com.example.product_service.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    private List<Product> products = new ArrayList<>();

    public ProductController() {
        products.add(new Product(1, "Laptop", 50000.0));
        products.add(new Product(2, "Phone", 20000.0));
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable int id) {
        for (Product product : products) {
            if (product.getId() == id) {
                return product;
            }
        }
        return null;
    }
}