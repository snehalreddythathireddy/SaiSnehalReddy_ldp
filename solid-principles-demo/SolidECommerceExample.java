interface Payment {
    void pay(double amount);
}

class CreditCardPayment implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Credit Card");
    }
}

class UpiPayment implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using UPI");
    }
}

class CashOnDelivery implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("Cash on Delivery selected for ₹" + amount);
    }
}

interface NotificationService {
    void send(String customerName, double amount);
}

class EmailNotification implements NotificationService {
    @Override
    public void send(String customerName, double amount) {

        System.out.println("Email sent to " + customerName + " for order amount ₹" + amount);
    }
}

interface OrderRepository {
    void save(String customerName, double amount);
}

class MySQLOrderRepository implements OrderRepository {
    @Override
    public void save(String customerName, double amount) {
        System.out.println("Order saved to MySQL database");
    }
}

class InvoiceGenerator {
    public void generate(String customerName, double amount) {
        System.out.println("Invoice generated for " + customerName + " - ₹" + amount);
    }
}

class Order {
    private String customerName;
    private double productPrice;
    private int quantity;

    Order(
            String customerName,
            double productPrice,
            int quantity) {
        this.customerName = customerName;
        this.productPrice = productPrice;
        this.quantity = quantity;
    }

    public String getCustomerName() {
        return customerName;
    }

    public double calculateTotal() {

        return productPrice * quantity;
    }
}

class OrderService {
    private Payment payment;
    private OrderRepository orderRepository;
    private NotificationService notificationService;
    private InvoiceGenerator invoiceGenerator;

    OrderService(
            Payment payment,
            OrderRepository orderRepository,
            NotificationService notificationService,
            InvoiceGenerator invoiceGenerator) {
        this.payment = payment;
        this.orderRepository = orderRepository;
        this.notificationService = notificationService;
        this.invoiceGenerator = invoiceGenerator;
    }

    public void processOrder(Order order) {

        double total = order.calculateTotal();

        System.out.println("Customer: " + order.getCustomerName());

        System.out.println("Total amount: ₹" + total);

        payment.pay(total);

        orderRepository.save(order.getCustomerName(), total);

        notificationService.send(order.getCustomerName(), total);

        invoiceGenerator.generate(order.getCustomerName(), total);
    }
}

public class SolidECommerceExample {
    public static void main(String[] args) {

        Order order = new Order(
                "Snehal",
                1000,
                2);

        Payment payment = new UpiPayment();

        OrderRepository repository = new MySQLOrderRepository();

        NotificationService notification = new EmailNotification();

        InvoiceGenerator invoice = new InvoiceGenerator();

        OrderService orderService = new OrderService(
                payment,
                repository,
                notification,
                invoice);

        orderService.processOrder(order);
    }
}