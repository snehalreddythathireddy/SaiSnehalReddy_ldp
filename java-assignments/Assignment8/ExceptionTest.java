class ExceptionOne extends Exception {

    ExceptionOne(String message) {
        super(message);
    }
}

class ExceptionTwo extends Exception {

    ExceptionTwo(String message) {
        super(message);
    }
}

class ExceptionThree extends Exception {

    ExceptionThree(String message) {
        super(message);
    }
}

public class ExceptionTest {

    // Method that can throw all three exceptions
    static void throwExceptions(int number)
            throws ExceptionOne, ExceptionTwo, ExceptionThree {

        if (number == 1) {
            throw new ExceptionOne("Exception One");
        }

        if (number == 2) {
            throw new ExceptionTwo("Exception Two");
        }

        if (number == 3) {
            throw new ExceptionThree("Exception Three");
        }

        // Throw NullPointerException
        String value = null;
        System.out.println(value.length());
    }

    public static void main(String[] args) {

        try {

            throwExceptions(1);

        } catch (Exception e) {

            // One catch block catches all three custom exceptions
            System.out.println("Caught: " + e.getMessage());

        } finally {

            // This always executes
            System.out.println("Finally block executed");
        }
    }
}