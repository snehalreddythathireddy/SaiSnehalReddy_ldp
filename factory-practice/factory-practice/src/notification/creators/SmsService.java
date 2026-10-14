package notification.creators;

import notification.products.Notification;
import notification.products.SmsNotification;

public class SmsService extends NotificationService {
    @Override
    public Notification createNotification() {
        return new SmsNotification();
    }
}