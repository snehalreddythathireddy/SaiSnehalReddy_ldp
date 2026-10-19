package factory.creators;

import factory.rides.BikeRide;
import factory.rides.Ride;

public class BikeBooking extends RideBooking {
    @Override
    public Ride createRide() {
        return new BikeRide();
    }
}