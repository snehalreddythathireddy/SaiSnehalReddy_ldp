package builder.order;

public class Order {

    private final String customerId;

    private final String coupon;
    private final String address;
    private final boolean giftWrap;

    private Order(OrderBuilder b) {
        this.customerId = b.customerId;
        this.coupon = b.coupon;
        this.address = b.address;
        this.giftWrap = b.giftWrap;
    }

    public String getCustomerId() { return customerId; }
    public String getCoupon() { return coupon; }
    public String getAddress() { return address; }
    public boolean isGiftWrap() { return giftWrap; }

    @Override
    public String toString() {
        return "Order [customerId=" + customerId + ", coupon=" + coupon
                + ", address=" + address + ", giftWrap=" + giftWrap + "]";
    }

    public static class OrderBuilder {

        private final String customerId;

        private String coupon = "NONE";
        private String address = "Pickup from store";
        private boolean giftWrap = false;

        public OrderBuilder(String customerId) {
            this.customerId = customerId;
        }

        public OrderBuilder coupon(String coupon) {
            this.coupon = coupon;
            return this;
        }

        public OrderBuilder address(String address) {
            this.address = address;
            return this;
        }

        public OrderBuilder giftWrap(boolean giftWrap) {
            this.giftWrap = giftWrap;
            return this;
        }

        public Order build() {
            if (customerId == null || customerId.isBlank()) {
                throw new IllegalStateException("Customer ID is required");
            }
            return new Order(this);
        }
    }
}