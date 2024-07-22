class Product {
    constructor(name, price, description, inStock = true){
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
    }

    display(){
        return `Name: ${this.name}, Price: ${this.price}, Descripton: ${this.description}`
    }
}

module.exports = Product;