interface Payment {

    void pay();
}

class CreditCardPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Payment using Credit Card");
    }
}

class UpiPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Payment using UPI");
    }
}

class PayPalPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Payment using PayPal");
    }
}

class PaymentService {

    public void processPayment(Payment payment) {
        payment.pay();
    }
}

public class OCPExample {

    public static void main(String[] args) {

        PaymentService paymentService = new PaymentService();

        Payment creditCard = new CreditCardPayment();

        Payment upi = new UpiPayment();

        Payment paypal = new PayPalPayment();

        paymentService.processPayment(creditCard);

        paymentService.processPayment(upi);

        paymentService.processPayment(paypal);
    }
}