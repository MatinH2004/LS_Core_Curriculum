function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = [];
    let transactions = [];

    return {
      number,
    
      deposit(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount})
        return amount;
      },
    
      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
        }
    
        transactions.push({type: 'withdrawal', amount})
        balance -= amount;
        return amount;
      },

      balance() {
        return balance;
      },

      number() {
        return number;
      },

      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number)
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}
