package Snehal.Assignment5.Data;

public class Data {
    int number;
    char alphabet;

    public void printVariables() {
        System.out.println("Number: " + number);
        System.out.println("Aplhabet: " + alphabet);
    }

    public void Localvariables() {
        int localVariable;
        char localAlphabet;
        /*
         * Local variables are not automatically initialized in Java.
         * Therefore, the following statements are not allowed:
         *
         * System.out.println("Local Variable: " + localVariable);
         * System.out.println("Local Alphabet: " + localAlphabet);
         *
         * Java gives a compile-time error:
         * "variable might not have been initialized"
         */
    }

}
