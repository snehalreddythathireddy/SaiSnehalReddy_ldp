package Snehal.Assignment5.Main;

import Snehal.Assignment5.Data.*;
import Snehal.Assignment5.Singleton.*;

public class Main {

    public static void main(String[] args) {

        Data data = new Data();

        data.printVariables();

        data.Localvariables();

        Singleton singleton = Singleton.initialize("Hello Java");

        singleton.printString();
    }
}
/*
 * javac -d out Snehal/Assignment5/Data/Data.java
 * Snehal/Assignment5/Singleton/Singleton.java Snehal/Assignment5/Main/Main.java
 * java -cp out Snehal.Assignment5.Main.Main
 */