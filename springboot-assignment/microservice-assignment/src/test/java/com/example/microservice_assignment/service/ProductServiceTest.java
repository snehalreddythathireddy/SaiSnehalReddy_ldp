package com.example.microservice_assignment.service;

import com.example.microservice_assignment.model.Product;
import com.example.microservice_assignment.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void testGetAllProducts() {
        Product p1 = new Product("Laptop", 50000.0);
        Product p2 = new Product("Phone", 20000.0);
        when(productRepository.findAll()).thenReturn(List.of(p1, p2));

        List<Product> result = productService.getAllProducts();

        assertEquals(2, result.size());
        verify(productRepository, times(1)).findAll();
    }
    @Test
    void testGetProductById_found() {
        Product p1 = new Product("Laptop", 50000.0);
        p1.setId(1L);
        when(productRepository.findById(1L)).thenReturn(Optional.of(p1));

        Optional<Product> result = productService.getProductById(1L);

        assertTrue(result.isPresent());
        assertEquals("Laptop", result.get().getName());
    }

    @Test
    void testGetProductById_notFound() {
        when(productRepository.findById(99L)).thenReturn(Optional.empty());

        Optional<Product> result = productService.getProductById(99L);

        assertFalse(result.isPresent());
    }

    @Test
    void testCreateProduct() {
        Product p1 = new Product("Phone", 20000.0);
        when(productRepository.save(p1)).thenReturn(p1);

        Product result = productService.createProduct(p1);

        assertEquals("Phone", result.getName());
        verify(productRepository, times(1)).save(p1);
    }

    @Test
    void testDeleteProduct() {
        productService.deleteProduct(1L);

        verify(productRepository, times(1)).deleteById(1L);
    }
    @Test
    void testUpdateProduct() {
        Product existing = new Product("Laptop", 50000.0);
        existing.setId(1L);

        Product updatedData = new Product("Laptop Pro", 60000.0);

        when(productRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(productRepository.save(existing)).thenReturn(existing);

        Product result = productService.updateProduct(1L, updatedData);

        assertEquals("Laptop Pro", result.getName());
        assertEquals(60000.0, result.getPrice());
        verify(productRepository, times(1)).save(existing);
    }
}