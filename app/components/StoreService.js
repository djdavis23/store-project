import Store from "../models/Store.js"
let skiStore = new Store();

class StoreService {
  constructor() {

  }

  get products() {
    return skiStore.Products;
  }

  get cart() {
    return skiStore.cart;
  }
}






console.log("Hello from StoreService.js")
export default StoreService