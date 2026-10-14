package notification;

import notification.creators.EmailService;
import notification.creators.NotificationService;
import notification.creators.SmsService;

public class Main {
    private static NotificationService service;

    public static void main(String[] args) {
        configure("EMAIL");
        service.notifyUser("Your order is shipped");

        configure("SMS");
        service.notifyUser("Your OTP is 4567");
    }

    static void configure(String type) {
        if (type.equals("EMAIL")) {
            service = new EmailService();
        } else {
            service = new SmsService();
        }
    }
}