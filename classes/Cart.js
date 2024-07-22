const Product = require("./Product")

class Cart {
    constructor(products, total) {
        this.products = [];
        this.total = 0
    }

    addProduct(product) {
            if(product instanceof Product) {       
            //console.log("this is product " + product.name)
            this.products.push(product.name) 
            this.total += 1    
        } else throw new Error ("ERROR")
        
    }

    removeProduct(product) {
        if(product instanceof Product) {
            let index = this.products.indexOf(product.name)
            this.products.splice(index,1)
            this.total -= 1
        }
    }
}

const prod1 = new Product("Bag", 10, "leather bag")
console.log(prod1)
const cart1 = new Cart()
cart1.addProduct(prod1)
console.log(cart1.products)

module.exports = Cart;