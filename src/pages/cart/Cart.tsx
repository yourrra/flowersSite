import { Layout } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import { EmptyCart } from './components/EmptyCart'
import { FullCart } from './components/FullCart'
import { observer } from 'mobx-react-lite'
import cartStore from '@/stores/CartStore'

import styles from './Cart.module.css'

export const Cart = observer(() => {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <Typography tag="h1" variant="h1" className={styles.Title}>
          Cart
        </Typography>
        {cartStore.cartItems.length > 0 ? <FullCart /> : <EmptyCart />}
      </div>
    </Layout>
  )
})
