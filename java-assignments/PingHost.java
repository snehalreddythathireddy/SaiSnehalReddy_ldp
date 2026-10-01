import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class PingHost {

    static double ping(String host) throws Exception {

        List<Double> times = new ArrayList<>();

        ProcessBuilder builder = new ProcessBuilder(
                "ping", "-c", "5", host);

        Process process = builder.start();

        BufferedReader reader = new BufferedReader(
                new InputStreamReader(process.getInputStream()));

        String line;

        while ((line = reader.readLine()) != null) {

            if (line.contains("time=")) {

                String time = line.split("time=")[1].split(" ")[0];

                times.add(Double.parseDouble(time));
            }
        }

        process.waitFor();

        if (times.isEmpty()) {
            return -1;
        }

        Collections.sort(times);

        int middle = times.size() / 2;

        if (times.size() % 2 == 1) {
            return times.get(middle);
        } else {
            return (times.get(middle - 1) + times.get(middle)) / 2;
        }
    }

    public static void main(String[] args) throws Exception {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter host: ");
        String host = scanner.nextLine();

        double median = ping(host);

        if (median == -1) {
            System.out.println("Host could not be reached.");
        } else {
            System.out.println("Median ping time: " + median + " ms");
        }

        scanner.close();
    }
}