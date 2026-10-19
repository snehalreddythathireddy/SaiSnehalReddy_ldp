package com.example.microservice_assignment.controller;

import com.example.microservice_assignment.dto.ProductRequestDto;
import com.example.microservice_assignment.model.Product;
import com.example.microservice_assignment.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // @PostMapping
    // public ResponseEntity<Product> createProduct(@RequestBody Product product) {
    //     Product saved = productService.createProduct(product);
    //     return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    // }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody ProductRequestDto request) {
        Product product = new Product(request.getName(), request.getPrice());
        Product saved = productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
    //     return ResponseEntity.ok(productService.updateProduct(id, product));
    // }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @Valid @RequestBody ProductRequestDto request) {
        Product product = new Product(request.getName(), request.getPrice());
        return ResponseEntity.ok(productService.updateProduct(id, product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}
