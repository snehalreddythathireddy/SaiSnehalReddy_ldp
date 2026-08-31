class SList<T> {

    Link<T> head;


    SListIterator<T> iterator() {
        return new SListIterator<>(this);
    }

    @Override
    public String toString() {

        String result = "";

        Link<T> current = head;

        while (current != null) {
            result += current.data + " ";
            current = current.next;
        }

        return result;
    }
}


class Link<T> {

    T data;
    Link<T> next;

    Link(T data) {
        this.data = data;
    }
}


class SListIterator<T> {

    SList<T> list;
    Link<T> current;

    SListIterator(SList<T> list) {
        this.list = list;
        this.current = list.head;
    }

    void add(T data) {

        Link<T> newLink = new Link<>(data);

        newLink.next = list.head;
        list.head = newLink;

        current = list.head;
    }

    void display() {

        current = list.head;

        while (current != null) {

            System.out.println(current.data);

            current = current.next;
        }
    }
}


public class SListTest {

    public static void main(String[] args) {

        SList<Integer> numbers = new SList<>();

        SListIterator<Integer> iterator =
                numbers.iterator();

        iterator.add(30);
        iterator.add(20);
        iterator.add(10);

        System.out.println("List:");

        iterator.display();

        System.out.println("Using toString():");
        System.out.println(numbers);
    }
}