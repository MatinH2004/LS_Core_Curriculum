class BankAccount {
  #balance = 0;

  #checkBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#checkBalance();
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new RangeError('Insufficient funds');
    } else {
      this.#balance -= amount;
      this.#checkBalance();
    }
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds