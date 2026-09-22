package com.example.bean_lifecycle_practice.model;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

@Component
public class Engine implements InitializingBean, DisposableBean {

    public Engine() {
        System.out.println("Engine constructor called");
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println("Engine afterPropertiesSet called (like PostConstruct)");
    }

    @Override
    public void destroy() {
        System.out.println("Engine destroy called (like PreDestroy)");
    }
}