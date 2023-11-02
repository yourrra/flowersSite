import { makeAutoObservable } from 'mobx'

export interface CartItem {
  id: string
  image: string
  name: string
  price: number
  quantity: number
}

class CartStore {
  cartItems: CartItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addProduct(id: string, name: string, price: number, image: string) {
    const existingItem = this.cartItems.find(item => item.id === id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.cartItems.push({
        id,
        name,
        price,
        quantity: 1,
        image,
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
}

const cartStore = new CartStore()
export default cartStore
