package onlineorder;

import onlineorder.factory.OnlineOrderProcessingFactory;
import onlineorder.orders.Order;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter order category (or exit): ");
            String category = scanner.nextLine().trim();

            if (category.equalsIgnoreCase("exit")) {
                break;
            }
            if (category.isEmpty()) {
                continue;
            }

            try {
                Order order = OnlineOrderProcessingFactory.createOrder(category);
                order.process();
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}