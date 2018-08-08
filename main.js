import StoreController from "./app/components/StoreController.js"

class App {
  constructor() {
    this.controllers = {
      skiStoreController: new StoreController()
    }
  }
}
console.log("Hello from main.js")
window.app = new App()