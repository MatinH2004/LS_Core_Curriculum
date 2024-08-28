const invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    this.unpaid.push({
      name,
      amount
    });
  },

  payInvoice(name) {
    const unpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === name) this.paid.push(invoice);
      else unpaid.push(invoice);
    });

    this.unpaid = unpaid;
  },

  totalDue() {
    return this.unpaid.reduce((total, {amount}) => total + amount, 0);
  },

  totalPaid() {
    return this.paid.reduce((total, {amount}) => total + amount, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid()); // 550
console.log(invoices.totalDue());  // 187.5
