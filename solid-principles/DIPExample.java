interface InputDevice {

    void input();
}

class Keyboard implements InputDevice {

    @Override
    public void input() {
        System.out.println("Typing using keyboard");
    }
}

class Mouse implements InputDevice {

    @Override
    public void input() {
        System.out.println("Clicking using mouse");
    }
}

class Computer {

    private InputDevice inputDevice;

    Computer(InputDevice inputDevice) {
        this.inputDevice = inputDevice;
    }

    public void start() {
        inputDevice.input();
    }
}

public class DIPExample {

    public static void main(String[] args) {

        InputDevice keyboard = new Keyboard();

        Computer computer = new Computer(keyboard);

        computer.start();

        InputDevice mouse = new Mouse();

        Computer computer2 = new Computer(mouse);

        computer2.start();
    }
}