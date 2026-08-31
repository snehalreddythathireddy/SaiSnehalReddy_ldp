class Computer {

    // Inner class
    class Processor {

        private String type;

        // Non-default constructor
        Processor(String type) {
            this.type = type;
        }

        void display() {
            System.out.println("Processor: " + type);
        }
    }
}

// Second class
class Laptop {

    // Inner class inherits from Computer's inner class
    class LaptopProcessor extends Computer.Processor {

        // Constructor
        LaptopProcessor(String type) {

            // Create Computer object and call parent constructor
            new Computer().super(type);
        }

        void displayLaptopProcessor() {
            System.out.println("Laptop processor");
        }
    }
}

public class InnerClassTest {

    public static void main(String[] args) {

        Laptop laptop = new Laptop();

        Laptop.LaptopProcessor processor = laptop.new LaptopProcessor("Intel");

        processor.display();
        processor.displayLaptopProcessor();
    }
}