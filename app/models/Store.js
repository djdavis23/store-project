import Product from "./Product.js"

let skiis = new Product("Skiis", "assets/skis.jpg", 600, 3)
let helmets = new Product("Helmet", "assets/helmet.jpg", 50, 20)
let goggles = new Product("Goggles", "assets/goggles.jpg", 40, 10)

let cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0
}
let taxRate = 0.07;

class Store {

  constructor() {
    this.til = 0;
  }

  get Products() {
    return [
      {
        name: skiis.name,
        image: skiis.image,
        price: skiis.price,
        quantity: skiis.quantity
      },
      {
        name: helmets.name,
        image: helmets.image,
        price: helmets.price,
        quantity: helmets.quantity
      },
      {
        name: goggles.name,
        image: goggles.image,
        price: goggles.price,
        quantity: goggles.quantity
      }
    ]
  }

  get cart() {
    return {
      items: cart.items,
      subtotal: cart.subtotal,
      tax: cart.tax,
      total: cart.total

    }
  }

  addToCart(item) {
    //find product
    let status = "";
    let product = this.Products.find(prod => prod.name == item);
    //if invalid product received, exit
    if (product == undefined || product.quantity == 0) { return "Not in stock" }
    //check cart to see if item is already in there
    let cartItem = this.cart.items.find(myItem => myItem.name == product.name);
    //if item not in cart, add it
    if (cartItem == undefined) {
      this.cart.items.push({ name: product.name, orderQuantity: 1 });
      cart.subtotal += product.price;
      status = "Item added to cart";
    }//if item is already in cart and cart quantity is less than product quantity,
    //increase cart quantity by one
    else if (cartItem.orderQuantity < product.quantity) {
      cartItem.orderQuantity++;
      cart.subtotal += product.price;
      status = "Item added to cart";
    }
    else {
      status = `There are only ${product.quantity} of this item left in stock`;
    }
    //update cart total
    cart.tax = cart.subtotal * taxRate;
    cart.total = cart.subtotal + cart.tax;
    return status;
  }

  purchase() {
    for (let i = 0; i < cart.items.length; i++) {
      let item = this.cart.items[i];
      //update inventory
      if (item.name == skiis.name) {
        skiis.purchase(item.orderQuantity);
      }
      else if (item.name == helmets.name) {
        helmets.purchase(item.orderQuantity);
      }
      else {
        goggles.purchase(item.orderQuantity);
      }
    }
    //update and console log the til
    this.til += cart.total;
    //empty the cart
    cart.items.splice(0, cart.items.length);
    cart.subtotal = 0;
    cart.tax = 0;
    cart.total = 0;
    console.log("Store til: $" + this.til.toFixed(2));
    return "Thank you for shopping with us!"
  }


}

export default Store