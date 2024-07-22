const Customer = require("./Customer");

class Auth {
  constructor(customers) {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const customer1 = new Customer(name, email, shippingAddress);
    this.customers.push(customer1);
  }

  login(email) {
    for (let i = 0; i < this.customers.length; i++) {
      let currentCustomer = this.customers[i];

      if (currentCustomer.email === email) {
        return currentCustomer;
      } else {
        return null;
      }
    }
  }
}

module.exports = Auth;
