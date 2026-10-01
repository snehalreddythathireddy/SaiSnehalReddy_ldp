package com.example.junit_mockito_practice.repository;

import com.example.junit_mockito_practice.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Repository
public class InMemoryProductRepository implements ProductRepository {

    private final Map<Integer, Product> store = new ConcurrentHashMap<>();
    private final AtomicInteger idSequence = new AtomicInteger(0);

    @Override
    public List<Product> findAll() {
        return List.copyOf(store.values());
    }

    @Override
    public Optional<Product> findById(int id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Product save(Product product) {
        if (product.getId() == 0) {
            product.setId(idSequence.incrementAndGet());
        }
        store.put(product.getId(), product);
        return product;
    }

    @Override
    public void deleteById(int id) {
        store.remove(id);
    }
}