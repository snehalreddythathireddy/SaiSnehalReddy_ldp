package factory.rides;

public class AutoRide implements Ride {
    @Override
    public void book(double km) {
        double fare = 30 + 12 * km;
        System.out.println("Auto ride booked for " + km + " km. Fare: " + fare);
    }
}