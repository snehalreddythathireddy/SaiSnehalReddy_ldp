package factory.creators;

import factory.rides.Ride;

public abstract class RideBooking {

    public abstract Ride createRide();

    public void confirmRide(double km) {
        System.out.println("Finding a nearby driver...");
        Ride ride = createRide();
        ride.book(km);
    }
}