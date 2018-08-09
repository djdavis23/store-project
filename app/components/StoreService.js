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

  addToCart(item) {
    let status = skiStore.addToCart(item);
    return status;
  }

  purchase() {
    return skiStore.purchase();
  }

  updateTill() {
    return skiStore.til.toFixed(2);
  }

}
export default StoreService