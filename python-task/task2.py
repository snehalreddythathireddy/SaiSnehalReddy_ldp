class BankAccount:
    def __init__(self, account_number, account_holder, balance):
        self.account_number = account_number
        self.account_holder = account_holder
        self.__balance = balance  

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount}. New balance: {self.__balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if 0 < (amount <= self.__balance):
            self.__balance -= amount
            print(f"Withdrew {amount}. New balance: {self.__balance}")
        else:
            print("Invalid withdrawal amount.")

    def get_balance(self):
        return self.__balance


acc = BankAccount(101, "Snehal", 1000)
acc.deposit(500)
acc.withdraw(300)

print(acc.get_balance())
