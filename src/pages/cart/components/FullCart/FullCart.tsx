import { Typography } from '@/components/Typography'
import { OrderCard } from '../OrderCard'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'

import styles from './FullCart.module.css'

import flower from '@/assets/flower-one.jpg'

export const FullCart = observer(() => {
  const cartItems: CartItem[] = cartStore.getCartItems()

  return (
    <div className={styles.Wrapper}>
      <Typography variant="h2" className={styles.Title}>
        Your order
      </Typography>
      <div className={styles.OrderList}>
        {cartStore.cartItems.map(item => (
          <OrderCard
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            img={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
})
