import StoreService from "./StoreService.js"

const invDisplay = document.getElementById("inventory");
const cartDisplay = document.getElementById("cart");
const statusBox = document.getElementById("status-box");

let skiStoreService = new StoreService();
let statusMsg = "Enjoy your shopping!"


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
        <button id="${item.name}" onclick="app.controllers.skiStoreController.addToCart('${item.name}')">Add to Cart</button>
      </div>
      `
  });
  invDisplay.innerHTML = template;

  statusBox.innerText = statusMsg;

  let cartTemp = ``;
  cart.items.forEach(function (item) {
    cartTemp += `
      <h3>Item: ${item.stockItem.name} Quantity: ${item.orderQuantity}</h3>
    `
  });
  cartDisplay.innerHTML = `
  <div>
    <h2>Your Shopping Cart:</h2>
    ${cartTemp}
  </div>
  <div>
    <h3>Subtotal:  $${cart.subtotal.toFixed(2)}</h3>
    <h3>Tax:  $${cart.tax.toFixed(2)}</h3>
    <h3>Total:  $${cart.total.toFixed(2)}</h3>
    <button onclick="app.controllers.skiStoreController.purchase()">Check Out</button>


  </div>

  
  `
}

class StoreController {
  constructor() {
    draw();
  }

  addToCart(item) {
    statusMsg = skiStoreService.addToCart(item);
    draw();
  }

  purchase() {
    statusMsg = skiStoreService.purchase();
    draw();
  }
}




console.log("Hello from StoreController.js")

export default StoreController