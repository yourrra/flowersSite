import { Button } from '../Button'
import { memo, useState } from 'react'
import { Typography } from '../Typography'

import styles from './CTA.module.css'

import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'

export const CTA = memo(() => {
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
        <Typography variant="h3">{count}</Typography>
        <button
          type="button"
          className={styles.Button}
          onClick={handleIncrement}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
      <Button variant="red" type="button">
        ADD TO CART
      </Button>
    </div>
  )
})
