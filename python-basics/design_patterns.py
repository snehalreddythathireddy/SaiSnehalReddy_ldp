
# 1. SINGLETON PATTERN

class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

db1 = Database()
db2 = Database()

print(db1 is db2)


# 2. FACTORY PATTERN

class Car:
    def drive(self):
        print("Driving a car")

class Bike:
    def drive(self):
        print("Riding a bike")

class VehicleFactory:
    @staticmethod
    def get_vehicle(vehicle_type):
        if vehicle_type == "car":
            return Car()
        elif vehicle_type == "bike":
            return Bike()
        else:
            raise ValueError("Invalid vehicle type")

vehicle = VehicleFactory.get_vehicle("car")
vehicle.drive()


# 3. BUILDER PATTERN

class Computer:
    def __init__(self):
        self.ram = None
        self.storage = None
        self.processor = None

class ComputerBuilder:
    def __init__(self):
        self.computer = Computer()

    def set_ram(self, ram):
        self.computer.ram = ram
        return self

    def set_storage(self, storage):
        self.computer.storage = storage
        return self

    def set_processor(self, processor):
        self.computer.processor = processor
        return self

    def build(self):
        return self.computer

computer = (
    ComputerBuilder()
    .set_ram("16GB")
    .set_storage("512GB SSD")
    .set_processor("Intel i7")
    .build()
)

print(computer.ram)
print(computer.storage)
print(computer.processor)


# 4. STRATEGY PATTERN

class CreditCardPayment:
    def pay(self, amount):
        print(f"Paid {amount} using Credit Card")

class UpiPayment:
    def pay(self, amount):
        print(f"Paid {amount} using UPI")

class PaymentContext:
    def __init__(self, strategy):
        self.strategy = strategy

    def execute_payment(self, amount):
        self.strategy.pay(amount)

payment = PaymentContext(UpiPayment())
payment.execute_payment(1000)


# 5. OBSERVER PATTERN

class Subject:
    def __init__(self):
        self.observers = []

    def subscribe(self, observer):
        self.observers.append(observer)

    def notify(self, message):
        for observer in self.observers:
            observer.update(message)

class User:
    def update(self, message):
        print("Notification:", message)

subject = Subject()

user1 = User()
user2 = User()

subject.subscribe(user1)
subject.subscribe(user2)

subject.notify("New update available!")


# 6. ADAPTER PATTERN

class OldPrinter:
    def old_print(self, message):
        print(message)

class PrinterAdapter:
    def __init__(self, printer):
        self.printer = printer

    def print_message(self, message):
        self.printer.old_print(message)

printer = PrinterAdapter(OldPrinter())
printer.print_message("Hello Python")
