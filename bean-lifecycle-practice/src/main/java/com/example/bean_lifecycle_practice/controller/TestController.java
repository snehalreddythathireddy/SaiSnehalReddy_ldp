package com.example.bean_lifecycle_practice.controller;

import com.example.bean_lifecycle_practice.model.RequestScopedBean;
import com.example.bean_lifecycle_practice.model.SessionScopedBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    private final RequestScopedBean requestScopedBean;
    private final SessionScopedBean sessionScopedBean;

    public TestController(RequestScopedBean requestScopedBean, SessionScopedBean sessionScopedBean) {
        this.requestScopedBean = requestScopedBean;
        this.sessionScopedBean = sessionScopedBean;
    }

    @GetMapping("/test-scope")
    public String testScope() {
        return "Request bean: " + requestScopedBean + "<br>Session bean: " + sessionScopedBean;
    }
}