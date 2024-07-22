const Product = require("./Product");

class Cart {
  constructor(products, total) {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    if (product instanceof Product) {
      //console.log("this is product " + product.name)
      this.products.push(product);
      this.total += product.price;
    } else throw new Error("ERROR");
  }

  removeProduct(i) {
    //     if (product instanceof Product) {
    //       let index = this.products.indexOf(product.name);
    //       this.products.splice(index, 1);
    //       this.total -= product.price;
    //     }
    //   }
    let currentProduct = this.products[i];
    console.log("Current product: ", currentProduct);
    this.products.splice(i, 1);
    this.total -= currentProduct.price;
  }
}

const prod1 = new Product("Bag", 10, "leather bag");
console.log(prod1);
const cart1 = new Cart();
cart1.addProduct(prod1);
cart1.removeProduct(0);
// console.log("HERE: ", cart1.products);

module.exports = Cart;
