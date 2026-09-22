package com.example.bean_lifecycle_practice;

import com.example.bean_lifecycle_practice.model.Car;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class BeanLifecyclePracticeApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(BeanLifecyclePracticeApplication.class, args);

		Car car1 = context.getBean(Car.class);
		Car car2 = context.getBean(Car.class);

		System.out.println("car1: " + car1);
		System.out.println("car2: " + car2);
	}
}