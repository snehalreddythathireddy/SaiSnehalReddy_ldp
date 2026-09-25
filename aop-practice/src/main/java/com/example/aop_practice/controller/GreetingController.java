package com.example.aop_practice.controller;

import com.example.aop_practice.service.GreetingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private final GreetingService greetingService;

    public GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    public String greet(@RequestParam String name) {
        return greetingService.greet(name);
    }
    @GetMapping("/risky-greet")
    public String riskyGreet(@RequestParam String name) {
        return greetingService.riskyGreet(name);
    }
    @GetMapping("/farewell")
    public String farewell(@RequestParam String name) {
        return greetingService.farewell(name);
    }
    @GetMapping("/outer-greet")
    public String outerGreet(@RequestParam String name) {
        return greetingService.outerGreet(name);
    }
}