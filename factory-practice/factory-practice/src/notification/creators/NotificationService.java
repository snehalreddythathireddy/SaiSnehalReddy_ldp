package notification.creators;

import notification.products.Notification;

public abstract class NotificationService {

    public void notifyUser(String message) {
        Notification notification = createNotification();
        notification.send(message);
    }

    public abstract Notification createNotification();
}