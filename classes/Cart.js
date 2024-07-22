const Product = require("./Product");

class Cart {
  constructor(products, total) {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
      this.total += product.price;
    } else throw new Error("ERROR");
  }

  removeProduct(i) {
    let currentProduct = this.products[i];
    this.products.splice(i, 1);
    this.total -= currentProduct.price;
  }
}

const prod1 = new Product("Bag", 10, "leather bag");
const cart1 = new Cart();
cart1.addProduct(prod1);
cart1.removeProduct(0);

module.exports = Cart;
