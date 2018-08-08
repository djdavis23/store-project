import Product from "./Product.js"
let skiis = new Product("Skiis", "//placehold.it/200x200", 600, 3)
let helmets = new Product("Helmet", "//placehold.it/200x200", 50, 20)
let goggles = new Product("Goggles", "//placehold.it/200x200", 40, 10)
let cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0
}

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
}




console.log("Hello from Store.js")

export default Store