package person;

public class PersonWithSetters {
    private String firstName;
    private String lastName;
    private int age;
    private String address;
    private String email;
    private String phone;
    private String gender;
    private String occupation;
    private String nationality;
    private String maritalStatus;

    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setAge(int age) { this.age = age; }
    public void setAddress(String address) { this.address = address; }
    public void setEmail(String email) { this.email = email; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setGender(String gender) { this.gender = gender; }
    public void setOccupation(String occupation) { this.occupation = occupation; }
    public void setNationality(String nationality) { this.nationality = nationality; }
    public void setMaritalStatus(String maritalStatus) { this.maritalStatus = maritalStatus; }

    @Override
    public String toString() {
        return "PersonWithSetters [" + firstName + " " + lastName + ", age=" + age
                + ", address=" + address + ", email=" + email + ", phone=" + phone
                + ", gender=" + gender + ", occupation=" + occupation
                + ", nationality=" + nationality + ", maritalStatus=" + maritalStatus + "]";
    }
}