package com.example.rest_practice.exception;

public class MovieNotFoundException extends RuntimeException {

    public MovieNotFoundException(int id) {
        super("Movie with id " + id + " not found");
    }
}