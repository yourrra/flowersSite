import { Typography } from '@/components/Typography'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'

import styles from './OrderCard.module.css'

import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'
import trash from '@/assets/trash.svg'

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

const handleDelete = (id: string) => {
  cartStore.removeProduct(id)
}

export const OrderCard = observer(
  ({ name, price, img, quantity, id }: Props) => {
    return (
      <div className={styles.Wrapper}>
        <img className={styles.Img} src={img} alt={name} />
        <div className={styles.Info}>
          <div className={styles.PriceBlock}>
            <Typography variant="h3">${price * quantity}</Typography>
            <button className={styles.Button} onClick={() => handleDelete(id)}>
              <img src={trash} alt="trash" />
            </button>
          </div>
          <Typography variant="link" className={styles.Name}>
            {name}
          </Typography>
          <div className={styles.Quantity}>
            <button
              className={styles.Button}
              onClick={() => handleDecrementQuantity(id)}
            >
              <img src={minus} alt="minus" />
            </button>
            <Typography variant="h3">{quantity}</Typography>
            <button
              className={styles.Button}
              onClick={() => handleIncrementQuantity(id)}
            >
              <img src={plus} alt="plus" />
            </button>
          </div>
        </div>
      </div>
    )
  },
)
