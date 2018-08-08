
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
    if (number <= this.quantity) {
      this.quantity -= number;
      return number;
    }
    else {
      let result = this.quantity;
      this.quantity = 0;
      return result;
    }
  }

}

console.log("Hello from Product.js")

export default Product