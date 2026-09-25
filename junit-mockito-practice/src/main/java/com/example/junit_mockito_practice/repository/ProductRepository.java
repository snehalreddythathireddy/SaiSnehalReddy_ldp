package com.example.junit_mockito_practice.repository;

import com.example.junit_mockito_practice.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {
    List<Product> findAll();
    Optional<Product> findById(int id);
    Product save(Product product);
    void deleteById(int id);
}