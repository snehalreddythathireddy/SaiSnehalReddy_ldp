package com.example.order_service_assignment.service;

import com.example.order_service_assignment.model.Order;
import com.example.order_service_assignment.model.Product;
import com.example.order_service_assignment.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final RestTemplate restTemplate;
    @Value("${product.service.url}")
    private String productServiceUrl;

    @Autowired
    public OrderService(OrderRepository orderRepository, RestTemplate restTemplate) {
        this.orderRepository = orderRepository;
        this.restTemplate = restTemplate;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Order createOrder(Order order) {
        // Product product = restTemplate.getForObject(PRODUCT_SERVICE_URL + order.getProductId(), Product.class);
        Product product = restTemplate.getForObject(productServiceUrl + order.getProductId(), Product.class);
        if (product == null) {
            throw new RuntimeException("Product not found with id " + order.getProductId());
        }
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
