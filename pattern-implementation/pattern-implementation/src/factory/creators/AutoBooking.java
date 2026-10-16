package factory.creators;

import factory.rides.AutoRide;
import factory.rides.Ride;

public class AutoBooking extends RideBooking {
    @Override
    public Ride createRide() {
        return new AutoRide();
    }
}