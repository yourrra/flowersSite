import { Button } from '../Button'
import { useState } from 'react'
import { Typography } from '../Typography'

import styles from './CTA.module.css'

import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'

type Props = {
  handleAddToCart: () => void
  quantity: (number | undefined)[]
}

export const CTA = ({ handleAddToCart, quantity }: Props) => {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Counter}>
        <button
          type="button"
          className={styles.Button}
          onClick={handleDecrement}
        >
          <img src={minus} alt="minus" />
        </button>
        <Typography variant="h3">{quantity}</Typography>
        <button
          type="button"
          className={styles.Button}
          onClick={handleIncrement}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
      <Button variant="red" type="button" onClick={handleAddToCart}>
        ADD TO CART
      </Button>
    </div>
  )
}
