class Order {

    private String customerName;
    private double productPrice;
    private int quantity;

    Order(String customerName, double productPrice, int quantity) {
        this.customerName = customerName;
        this.productPrice = productPrice;
        this.quantity = quantity;
    }

    public void processOrder(String paymentType) {

        double total = productPrice * quantity;

        System.out.println("Customer: " + customerName);
        System.out.println("Total amount: ₹" + total);

        if (paymentType.equals("CreditCard")) {

            System.out.println("Processing Credit Card payment...");

        } else if (paymentType.equals("UPI")) {

            System.out.println("Processing UPI payment...");

        } else if (paymentType.equals("COD")) {

            System.out.println("Cash on Delivery selected...");

        }

        System.out.println("Saving order to MySQL database...");

        System.out.println(
                "Sending email notification to " + customerName);

        System.out.println("Generating invoice...");
    }
}

public class BadECommerceExample {

    public static void main(String[] args) {

        Order order = new Order("Snehal", 1000, 2);

        order.processOrder("UPI");
    }
}