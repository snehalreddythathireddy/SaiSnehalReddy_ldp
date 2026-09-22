package com.example.logger_practice.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class LoggerController {

    // --- Version 1: plain println, before we introduced a real logger ---
    // @GetMapping("/test")
    // public String test() {
    //     System.out.println("This is a plain println message");
    //     return "Check the console";
    // }

    // --- Version 2: added a real logger alongside println, to compare them ---
    // @GetMapping("/test")
    // public String test() {
    //     System.out.println("This is a plain println message");
    //     log.info("This is a proper log message");
    //     return "Check the console";
    // }

    // --- Version 3 (current): all five log levels, to see which ones show by default ---
    @GetMapping("/test")
    public String test() {
        log.trace("TRACE level message");
        log.debug("DEBUG level message");
        log.info("INFO level message");
        log.warn("WARN level message");
        log.error("ERROR level message");
        return "Check the console";
    }

    @GetMapping("/test-params")
    public String testParams() {
        String name = "Snehal";
        int age = 22;
        log.info("User logged in: {} with age {}", name, age);
        return "Check the console";
    }

    @GetMapping("/test-exception")
    public String testException() {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            log.error("Something went wrong during calculation", e);
        }
        return "Check the console";
    }
}