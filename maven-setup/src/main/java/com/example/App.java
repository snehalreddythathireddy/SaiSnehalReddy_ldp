package com.example;

import org.apache.commons.lang3.StringUtils;

public class App {
    public static void main(String[] args) {
        String result = StringUtils.reverse("Hello Maven");
        System.out.println(result);
    }
}