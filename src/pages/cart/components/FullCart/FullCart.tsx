import { Typography } from '@/components/Typography'
import { OrderCard } from '../OrderCard'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'

import styles from './FullCart.module.css'

import flower from '@/assets/flower-one.jpg'

export const FullCart = observer(() => {
  const prod = [
    {
      name: 'Orange Rose España 70 cm',
      price: 98.98,
      img: flower,
      quantity: 2,
    },
  ]

  const cartItems: CartItem[] = cartStore.getCartItems()

  return (
    <div className={styles.Wrapper}>
      <Typography variant="h2">Your order</Typography>
      {cartStore.cartItems.map(item => (
        <OrderCard
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          img={item.img}
          id={item.id}
        />
      ))}
      {prod.map(item => (
        <OrderCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          img={item.img}
        />
      ))}
    </div>
  )
})
