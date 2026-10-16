package factory.creators;

import factory.rides.CarRide;
import factory.rides.Ride;

public class CarBooking extends RideBooking {
    @Override
    public Ride createRide() {
        return new CarRide();
    }
}