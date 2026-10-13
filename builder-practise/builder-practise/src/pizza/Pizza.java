package pizza;

public class Pizza {
    private final String size;
    private final String crust;
    private final String sauce;
    private final boolean extraCheese;
    private final boolean mushrooms;

    private Pizza(PizzaBuilder builder) {
        this.size = builder.size;
        this.crust = builder.crust;
        this.sauce = builder.sauce;
        this.extraCheese = builder.extraCheese;
        this.mushrooms = builder.mushrooms;
    }

    @Override
    public String toString() {
        return "Pizza [size=" + size + ", crust=" + crust + ", sauce=" + sauce
                + ", extraCheese=" + extraCheese + ", mushrooms=" + mushrooms + "]";
    }

    public static class PizzaBuilder {
        private String size = "MEDIUM";
        private String crust = "REGULAR";
        private String sauce = "TOMATO";
        private boolean extraCheese = false;
        private boolean mushrooms = false;

        public PizzaBuilder size(String size) {
            this.size = size;
            return this;
        }

        public PizzaBuilder crust(String crust) {
            this.crust = crust;
            return this;
        }

        public PizzaBuilder sauce(String sauce) {
            this.sauce = sauce;
            return this;
        }

        public PizzaBuilder extraCheese(boolean extraCheese) {
            this.extraCheese = extraCheese;
            return this;
        }

        public PizzaBuilder mushrooms(boolean mushrooms) {
            this.mushrooms = mushrooms;
            return this;
        }

        public Pizza build() {
            return new Pizza(this);
        }
    }
}