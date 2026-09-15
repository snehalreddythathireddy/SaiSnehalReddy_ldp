package com.example.bean_lifecycle_practice.model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = org.springframework.context.annotation.ScopedProxyMode.TARGET_CLASS)
public class RequestScopedBean {

    public RequestScopedBean() {
        System.out.println("RequestScopedBean created: " + this);
    }
}