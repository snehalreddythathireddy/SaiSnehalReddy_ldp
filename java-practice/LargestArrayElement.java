public class LargestArrayElement {

    public static void main(String[] args) {

        int[] numbers = { 10, 25, 7, 42, 18 };

        int largest = numbers[0];

        for (int number : numbers) {
            if (number > largest) {
                largest = number;
            }
        }

        System.out.println("Largest element: " + largest);
    }
}