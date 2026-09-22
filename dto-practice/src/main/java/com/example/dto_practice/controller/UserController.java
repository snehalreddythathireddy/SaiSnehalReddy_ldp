package com.example.dto_practice.controller;

import com.example.dto_practice.dto.AddressDto;
import com.example.dto_practice.dto.UserCreateRequestDto;
import com.example.dto_practice.dto.UserResponseDto;
import com.example.dto_practice.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private int nextId = 1;

    @PostMapping
    public UserResponseDto createUser(@RequestBody UserCreateRequestDto request) {
        User user = new User();
        user.setId(nextId++);
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setEmail(request.getEmail());

        AddressDto address = new AddressDto();
        address.setCity("Vijayawada");
        address.setPincode("520001");

        UserResponseDto response = new UserResponseDto();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setAddress(address);
        return response;
    }
}