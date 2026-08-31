interface Cycle {

    void ride();
}

// Unicycle implementation
class Unicycle implements Cycle {

    @Override
    public void ride() {
        System.out.println("Riding a Unicycle");
    }
}

// Bicycle implementation
class Bicycle implements Cycle {

    @Override
    public void ride() {
        System.out.println("Riding a Bicycle");
    }
}

// Tricycle implementation
class Tricycle implements Cycle {

    @Override
    public void ride() {
        System.out.println("Riding a Tricycle");
    }
}

// Factory for Unicycle
class UnicycleFactory {

    public static Cycle create() {
        return new Unicycle();
    }
}

// Factory for Bicycle
class BicycleFactory {

    public static Cycle create() {
        return new Bicycle();
    }
}

// Factory for Tricycle
class TricycleFactory {

    public static Cycle create() {
        return new Tricycle();
    }
}

public class CycleFactoryTest {

    public static void main(String[] args) {

        Cycle unicycle = UnicycleFactory.create();
        Cycle bicycle = BicycleFactory.create();
        Cycle tricycle = TricycleFactory.create();

        unicycle.ride();
        bicycle.ride();
        tricycle.ride();
    }
}