package com.example.junit_mockito_practice.service;

import com.example.junit_mockito_practice.model.Product;
import com.example.junit_mockito_practice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    public Product createProduct(Product product) {
        if (product.getName() == null || product.getName().isBlank()) {
            throw new IllegalArgumentException("Product name must not be empty");
        }
        return productRepository.save(product);
    }

    public Product updateProduct(int id, Product updated) {
        Product existing = getProductById(id); // throws if missing
        existing.setName(updated.getName());
        existing.setPrice(updated.getPrice());
        return productRepository.save(existing);
    }

    public void deleteProduct(int id) {
        getProductById(id); // throws if missing, so delete of a bad id is a 404 not a silent no-op
        productRepository.deleteById(id);
    }
}