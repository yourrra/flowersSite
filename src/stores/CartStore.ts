import { makeAutoObservable } from 'mobx'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

class CartStore {
  cartItems: CartItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addProduct(id: string, name: string, price: number) {
    const existingItem = this.cartItems.find(item => item.id === id)
    console.log('+')

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.cartItems.push({
        id,
        name,
        price,
        quantity: 1,
      })
    }
  }

  removeProduct(id: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== id)
    console.log('-')
  }

  incrementQuantity(id: string) {
    const item = this.cartItems.find(item => item.id === id)
    if (item) {
      item.quantity += 1
    }
  }

  decrementQuantity(id: string) {
    const item = this.cartItems.find(item => item.id === id)
    if (item && item.quantity > 1) {
      item.quantity -= 1
    }
  }

  get total() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
  }

  get cartCount() {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  getCartItems() {
    return this.cartItems
  }

  //   addProduct(product) {
  //     this.products.push(product)
  //     this.calculateTotal()
  //     console.log('+')
  //   }

  //   removeProduct(index) {
  //     this.products.splice(index, 1)
  //     this.calculateTotal()
  //     console.log('-')
  //   }

  //   calculateTotal() {
  //     this.total = this.products.reduce((sum, product) => sum + product.price, 0)
  //   }
}

const cartStore = new CartStore()
export default cartStore
