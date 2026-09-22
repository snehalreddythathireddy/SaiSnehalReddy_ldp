package com.example.config_practice.controller;

import com.example.config_practice.config.AppConfig;
import com.example.config_practice.config.AppInfo;
import com.example.config_practice.model.Greeting;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private final Greeting greeting;
    private final AppInfo appInfo;
    private final AppConfig appConfig;
    private final String environmentMarker;


    public GreetingController(Greeting greeting, AppInfo appInfo, AppConfig appConfig, String environmentMarker) {
        this.greeting = greeting;
        this.appInfo = appInfo;
        this.appConfig = appConfig;
        this.environmentMarker = environmentMarker;
    }

    @GetMapping("/greeting")
    public String getGreeting() {
        return greeting.getMessage();
    }

    @GetMapping("/app-info")
    public String getAppInfo() {
        return "Name: " + appInfo.getName() + ", Version: " + appInfo.getVersion() + ", Author: " + appInfo.getAuthor();
    }

    @GetMapping("/environment")
    public String getEnvironment() {
        return "Current environment: " + appConfig.getEnvironmentName();
    }
    @GetMapping("/marker")
    public String getMarker() {
        return environmentMarker;
    }
}