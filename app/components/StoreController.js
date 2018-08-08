import StoreService from "./StoreService.js"

let skiStoreService = new StoreService();

const invDisplay = document.getElementById("inventory");
const cartDisplay = document.getElementById("cart");

function draw() {
  let inventory = skiStoreService.products
  let cart = skiStoreService.cart
  let template = ``

  inventory.forEach(function (item) {
    template += `
      <div>
        <div><img src="${item.image}" alt="skiis image" /></div>
        <h2>${item.name}</h2>
        <h3>Price: $${item.price.toFixed(2)}</h3>
        <h3>In Stock: ${item.quantity}</h3>
        <button onclick="app.controllers.skiStoreController.addToCart('${item.name}')">Add to Cart</button>
      </div>
      `
  });
  invDisplay.innerHTML = template;

  let cartTemp = ``;
  cart.items.forEach(function (item) {
    cartTemp += `
      <h3>Item: ${item.name}  Quantity: ${item.quantity}</h3>
    `
  });
  cartDisplay.innerHTML = `
  <div>
    <h2>Your Shopping Cart:</h2>
    ${cartTemp}
  </div>
  <div>
    <h3>Subtotal:  ${cart.subtotal}</h3>
    <h3>Tax:  ${cart.tax}</h3>
    <h3>Total:  ${cart.total}</h3>
    <button onclick="app.controllers.skiStoreController.purchase()">Check Out</button>

  </div>

  
  `



}

class StoreController {
  constructor() {
    draw();


  }

  addToCart(item) {

  }

  purchase() {

  }
}




console.log("Hello from StoreController.js")

export default StoreController