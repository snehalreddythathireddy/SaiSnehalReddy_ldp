public class Book {
    // Constructor
    Book(String title) {
        System.out.println("Book created: " + title);
    }

    public static void main(String[] args) {

        // Create an array of Book references
        Book[] books = new Book[3];
        books[0] = new Book("Java Basics");
        books[1] = new Book("Clean Code");
        books[2] = new Book("Design Patterns");

        System.out.println("Array created");

    }
}
