import StoreController from "./app/components/StoreController.js"

class App {
  constructor() {
    this.controllers = {
      skiStoreController: new StoreController()
    }
  }
}

window.app = new App()