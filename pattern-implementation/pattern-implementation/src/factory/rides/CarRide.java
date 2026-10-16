package factory.rides;

public class CarRide implements Ride {
    @Override
    public void book(double km) {
        double fare = 50 + 18 * km;
        System.out.println("Car ride booked for " + km + " km. Fare: " + fare);
    }
}