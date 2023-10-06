import { Typography } from '@/components/Typography'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'

import styles from './OrderCard.module.css'

type Props = {
  name: string
  price: number
  img?: string
  quantity: number
  id: string
}

const handleIncrementQuantity = (id: string) => {
  cartStore.incrementQuantity(id)
}

const handleDecrementQuantity = (id: string) => {
  cartStore.decrementQuantity(id)
}

export const OrderCard = observer(
  ({ name, price, img, quantity, id }: Props) => {
    return (
      <div className={styles.Wrapper}>
        <img className={styles.Img} src={img} alt={name} />
        <div className={styles.Info}>
          <Typography variant="h3">${price * quantity}</Typography>
          <Typography variant="link" className={styles.Name}>
            {name}
          </Typography>
          <div className={styles.Quantity}>
            <button
              className={styles.Button}
              onClick={() => handleDecrementQuantity(id)}
            >
              -
            </button>
            <Typography variant="h3">{quantity}</Typography>
            <button
              className={styles.Button}
              onClick={() => handleIncrementQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  },
)
