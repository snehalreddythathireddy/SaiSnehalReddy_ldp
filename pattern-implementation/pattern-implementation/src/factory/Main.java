package factory;

import factory.creators.AutoBooking;
import factory.creators.BikeBooking;
import factory.creators.CarBooking;
import factory.creators.RideBooking;

public class Main {
    public static void main(String[] args) {
        chooseBooking("BIKE").confirmRide(10);
        chooseBooking("AUTO").confirmRide(10);
        chooseBooking("CAR").confirmRide(10);
    }

    static RideBooking chooseBooking(String choice) {
        switch (choice) {
            case "BIKE": return new BikeBooking();
            case "AUTO": return new AutoBooking();
            case "CAR":  return new CarBooking();
            default: throw new IllegalArgumentException("Unknown ride: " + choice);
        }
    }
}