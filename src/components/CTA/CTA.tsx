import { Button } from '../Button'
import { Typography } from '../Typography'
import { observer } from 'mobx-react-lite'
import cartStore from '@/stores/CartStore'

import styles from './CTA.module.css'

import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'

type Props = {
  handleAddToCart: () => void
  quantity: number
  id: string
}

const handleIncrementQuantity = (id: string) => {
  cartStore.incrementQuantity(id)
}

const handleDecrementQuantity = (id: string) => {
  cartStore.decrementQuantity(id)
}

export const CTA = observer(({ handleAddToCart, quantity, id }: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Counter}>
        <button
          type="button"
          className={styles.Button}
          onClick={() => handleDecrementQuantity(id)}
        >
          <img src={minus} alt="minus" />
        </button>
        <Typography variant="h3">{quantity}</Typography>
        <button
          type="button"
          className={styles.Button}
          onClick={() => handleIncrementQuantity(id)}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
      <Button variant="red" type="button" onClick={handleAddToCart}>
        ADD TO CART
      </Button>
    </div>
  )
})
