class Cycle {

    Cycle() {
        System.out.println("Cycle constructor");
    }
}

class Unicycle extends Cycle {

    Unicycle() {
        System.out.println("Unicycle constructor");
    }

    void balance() {
        System.out.println("Unicycle is balancing");
    }
}

class Bicycle extends Cycle {

    Bicycle() {
        System.out.println("Bicycle constructor");
    }

    void balance() {
        System.out.println("Bicycle is balancing");
    }
}

class Tricycle extends Cycle {

    Tricycle() {
        System.out.println("Tricycle constructor");
    }
}

public class CycleTest {

    public static void main(String[] args) {

        // Upcasting
        Cycle[] cycles = {
                new Unicycle(),
                new Bicycle(),
                new Tricycle()
        };

        /*
         * We cannot call balance() here:
         *
         * cycles[0].balance();
         *
         * This gives a compile-time error because the reference
         * type is Cycle, and Cycle does not have a balance() method.
         */

        // Downcasting
        Unicycle unicycle = (Unicycle) cycles[0];
        unicycle.balance();

        Bicycle bicycle = (Bicycle) cycles[1];
        bicycle.balance();

        /*
         * Tricycle does not have balance(), so we cannot do:
         *
         * Tricycle tricycle = (Tricycle) cycles[2];
         * tricycle.balance();
         *
         * because Tricycle has no balance() method.
         */
    }
}