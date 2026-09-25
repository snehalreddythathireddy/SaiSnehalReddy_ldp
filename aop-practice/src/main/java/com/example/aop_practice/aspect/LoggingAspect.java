package com.example.aop_practice.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.JoinPoint;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(2)
public class LoggingAspect {

    @Before("execution(* com.example.aop_practice.service.*.*(..))")
    public void logBeforeMethod(JoinPoint joinPoint) {
        System.out.println("Calling method: " + joinPoint.getSignature().getName());
    }

    @Around("execution(* com.example.aop_practice.service.*.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long end = System.currentTimeMillis();
        System.out.println(joinPoint.getSignature().getName() + " executed in " + (end - start) + "ms");
        return result;
    }
    @After("execution(* com.example.aop_practice.service.*.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        System.out.println("Method finished (success or failure): " + joinPoint.getSignature().getName());
    }

    @AfterReturning(pointcut = "execution(* com.example.aop_practice.service.*.*(..))", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        System.out.println("Method returned: " + result);
    }

    @AfterThrowing(pointcut = "execution(* com.example.aop_practice.service.*.*(..))", throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable ex) {
        System.out.println("Method threw exception: " + ex.getMessage());
    }
}