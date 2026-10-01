package com.example.junit_mockito_practice.service;

import com.example.junit_mockito_practice.model.Product;
import com.example.junit_mockito_practice.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    private Product sample;

    @BeforeEach
    void setUp() {
        sample = new Product(1, "Keyboard", 2500.0);
    }

    @Test
    void getAllProducts_returnsWhatRepositoryReturns() {
        when(productRepository.findAll()).thenReturn(List.of(sample));

        List<Product> result = productService.getAllProducts();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getName()).isEqualTo("Keyboard");
        verify(productRepository, times(1)).findAll(); // proves the service actually delegated
    }

    @Test
    void getProductById_whenFound_returnsProduct() {
        when(productRepository.findById(1)).thenReturn(Optional.of(sample));

        Product result = productService.getProductById(1);

        assertThat(result).isEqualTo(sample);
    }

    @Test
    void getProductById_whenMissing_throwsNotFound() {
        when(productRepository.findById(99)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> productService.getProductById(99))
                .isInstanceOf(ProductNotFoundException.class)
                .hasMessageContaining("99");
    }

    @Test
    void createProduct_withValidName_savesAndReturns() {
        Product toCreate = new Product(0, "Monitor", 12000.0);
        when(productRepository.save(any(Product.class))).thenAnswer(invocation -> {
            Product p = invocation.getArgument(0);
            p.setId(5);
            return p;
        });

        Product result = productService.createProduct(toCreate);

        assertThat(result.getId()).isEqualTo(5);
        verify(productRepository).save(toCreate);
    }

    @Test
    void createProduct_withBlankName_throwsAndNeverCallsRepository() {
        Product invalid = new Product(0, "  ", 999.0);

        assertThatThrownBy(() -> productService.createProduct(invalid))
                .isInstanceOf(IllegalArgumentException.class);

        verify(productRepository, never()).save(any());
    }

    @Test
    void updateProduct_whenFound_updatesFields() {
        when(productRepository.findById(1)).thenReturn(Optional.of(sample));
        when(productRepository.save(any(Product.class))).thenAnswer(inv -> inv.getArgument(0));

        Product updated = productService.updateProduct(1, new Product(0, "Keyboard Pro", 3000.0));

        assertThat(updated.getName()).isEqualTo("Keyboard Pro");
        assertThat(updated.getPrice()).isEqualTo(3000.0);
    }

    @Test
    void deleteProduct_whenFound_delegatesToRepository() {
        when(productRepository.findById(1)).thenReturn(Optional.of(sample));

        productService.deleteProduct(1);

        verify(productRepository).deleteById(1);
    }

    @Test
    void deleteProduct_whenMissing_throwsAndNeverDeletes() {
        when(productRepository.findById(anyInt())).thenReturn(Optional.empty());

        assertThatThrownBy(() -> productService.deleteProduct(42))
                .isInstanceOf(ProductNotFoundException.class);

        verify(productRepository, never()).deleteById(anyInt());
    }
}