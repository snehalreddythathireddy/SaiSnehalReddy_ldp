package com.example.spring_practice.controller;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;
import com.example.spring_practice.model.Person;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {
    private String savedName = "Unknown";

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring MVC";
    }
    @GetMapping("/hello/{name}")
    public String sayHelloToName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }
    @GetMapping("/greet")
    public String greet(@RequestParam String name) {
        return "Greetings, " + name + "!";
    }
    @PostMapping("/person")
    public String createPerson(@Valid @RequestBody Person person) {
        return "Received person: " + person.getName();
    }
    @GetMapping("/age/{age}")
    public String checkAge(@PathVariable int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        return "Your age is " + age;
    }
    @PutMapping("/person")
    public String updatePerson(@RequestBody Person person) {
        savedName = person.getName();
        return "Updated name to: " + savedName;
    }
    @DeleteMapping("/person")
    public String deletePerson() {
        savedName = "Unknown";
        return "Person deleted, reset to: " + savedName;
    }
}