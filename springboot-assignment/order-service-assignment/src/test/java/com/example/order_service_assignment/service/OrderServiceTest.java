package com.example.order_service_assignment.service;

import com.example.order_service_assignment.model.Order;
import com.example.order_service_assignment.model.Product;
import com.example.order_service_assignment.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private OrderService orderService;

    @Test
    void testGetAllOrders() {
        Order o1 = new Order(1L, 2);
        when(orderRepository.findAll()).thenReturn(List.of(o1));

        List<Order> result = orderService.getAllOrders();

        assertEquals(1, result.size());
        verify(orderRepository, times(1)).findAll();
    }

    @Test
    void testGetOrderById_found() {
        Order o1 = new Order(1L, 2);
        o1.setId(1L);
        when(orderRepository.findById(1L)).thenReturn(Optional.of(o1));

        Optional<Order> result = orderService.getOrderById(1L);

        assertTrue(result.isPresent());
    }

    @Test
    void testGetOrderById_notFound() {
        when(orderRepository.findById(99L)).thenReturn(Optional.empty());

        Optional<Order> result = orderService.getOrderById(99L);

        assertFalse(result.isPresent());
    }

    @Test
    void testCreateOrder_productExists() {
        Order newOrder = new Order(1L, 2);
        Product fakeProduct = new Product();
        fakeProduct.setId(1L);
        fakeProduct.setName("Laptop");

        when(restTemplate.getForObject("http://localhost:8081/products/1", Product.class))
                .thenReturn(fakeProduct);
        when(orderRepository.save(newOrder)).thenReturn(newOrder);

        Order result = orderService.createOrder(newOrder);

        assertEquals(1L, result.getProductId());
        verify(orderRepository, times(1)).save(newOrder);
    }

    @Test
    void testCreateOrder_productNotFound() {
        Order newOrder = new Order(99L, 1);

        when(restTemplate.getForObject("http://localhost:8081/products/99", Product.class))
                .thenReturn(null);

        assertThrows(RuntimeException.class, () -> orderService.createOrder(newOrder));
        verify(orderRepository, never()).save(any());
    }

    @Test
    void testDeleteOrder() {
        orderService.deleteOrder(1L);

        verify(orderRepository, times(1)).deleteById(1L);
    }
}