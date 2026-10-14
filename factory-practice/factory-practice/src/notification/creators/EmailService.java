package notification.creators;

import notification.products.EmailNotification;
import notification.products.Notification;

public class EmailService extends NotificationService {
    @Override
    public Notification createNotification() {
        return new EmailNotification();
    }
}