package factory.rides;

public class BikeRide implements Ride {
    @Override
    public void book(double km) {
        double fare = 20 + 8 * km;
        System.out.println("Bike ride booked for " + km + " km. Fare: " + fare);
    }
}