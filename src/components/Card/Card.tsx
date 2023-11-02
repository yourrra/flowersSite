import { observer } from 'mobx-react-lite'
import { Link } from '../Link'
import { Typography } from '../Typography'
import styles from './Card.module.css'
import * as URLS from '../../constants/urls'
import { useState } from 'react'
import cartStore from '@/stores/CartStore'
import { UItem } from '@/type/item'

type Props = {
  img: string
  price: string
  title: string
  id: string
  data: UItem
}

export const Card = observer(({ data, img, price, title, id }: Props) => {
  const [isAddingCart, setIsAddingCart] = useState(false)

  const handleAddToCart = (event: any) => {
    if (data) {
      cartStore.addProduct(data.id, data.name, data.price, data.image)
    }
    event.preventDefault()
    setIsAddingCart(!isAddingCart)
  }

  return (
    <Link
      type="link"
      props={{
        to: URLS.PRODUCT(id),
        className: styles.Link,
        state: { title },
      }}
    >
      <div className={styles.Wrapper}>
        <img src={img} alt={title} className={styles.image} />
        {/* <Picture img={img} alt={img} /> */}
        <div className={styles.TextBlock}>
          <Typography className={styles.Text} variant="normal">
            {title}
          </Typography>
          <Typography className={styles.Price} variant="label">
            ${price}
          </Typography>
          <div className={styles.ButtonWrapper}>
            {isAddingCart ? (
              <button type="button" className={styles.Button}>
                <Typography variant="label">
                  <Link
                    type="link"
                    props={{
                      to: URLS.CART,
                      className: styles.LinkCart,
                    }}
                  >
                    GO TO CART
                  </Link>
                </Typography>
              </button>
            ) : (
              <button
                type="button"
                className={styles.Button}
                onClick={handleAddToCart}
              >
                <Typography variant="label" className={styles.ButtonAddCart}>
                  ADD TO CART
                </Typography>
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
})
