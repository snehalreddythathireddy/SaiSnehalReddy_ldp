package com.example.aop_practice.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(1)
public class NamedPointcutAspect {

    @Pointcut("execution(* com.example.aop_practice.service.GreetingService.farewell(..))")
    public void farewellMethod() {}

    @Before("farewellMethod()")
    public void logBeforeFarewell(JoinPoint joinPoint) {
        System.out.println("[Named Pointcut] Calling method: " + joinPoint.getSignature().getName());
    }
}