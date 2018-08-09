
let nextId = 1;

class Product {
  constructor(name, image, price, quantity) {
    this.name = name || ""
    this.image = image || "//placeholder.it/200x200"
    this.price = price || 0
    this.quantity = quantity || 0
    this.id = nextId;
    nextId++;
  }

  purchase(number) {
    this.quantity -= number;
  }

}

console.log("Hello from Product.js")

export default Product