package person;

public class Main {
    public static void main(String[] args) {

        Person p1 = new Person.PersonBuilder("Ravi", "Kumar")
                .age(25)
                .address("Hyderabad")
                .email("ravi@mail.com")
                .phone("9999999999")
                .gender("Male")
                .occupation("Developer")
                .nationality("Indian")
                .maritalStatus("Single")
                .build();
        System.out.println(p1);

        PersonWithSetters p2 = new PersonWithSetters();
        p2.setFirstName("Ravi");
        p2.setLastName("Kumar");
        p2.setAge(25);
        p2.setAddress("Hyderabad");
        p2.setEmail("ravi@mail.com");
        p2.setPhone("9999999999");
        p2.setGender("Male");
        p2.setOccupation("Developer");
        p2.setNationality("Indian");
        p2.setMaritalStatus("Single");
        System.out.println(p2);

        p2.setAge(30);
        System.out.println("After setAge(30): " + p2);

        System.out.println("Builder person is unchanged: " + p1);

        Person.PersonBuilder builder = new Person.PersonBuilder("Asha", "Rao").age(20);
        Person a1 = builder.build();
        builder.age(40);
        Person a2 = builder.build();
        System.out.println(a1.getAge());   // 20
        System.out.println(a2.getAge());   // 40
    }
}