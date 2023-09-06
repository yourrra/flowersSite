import { Link } from '../Link'
import { Typography } from '../Typography'
import styles from './Card.module.css'
import * as URLS from '../../constants/urls'

type Props = {
  img: string
  price: string
  title: string
  id: string
}

export function Card({ img, price, title, id }: Props) {
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
        <img src={img} alt={title} />
        {/* <Picture img={img} alt={img} /> */}
        <div className={styles.TextBlock}>
          <Typography className={styles.Text} variant="normal">
            {title}
          </Typography>
          <Typography className={styles.Price} variant="label">
            {price}
          </Typography>
          <div className={styles.ButtonWrapper}>
            <button type="button" className={styles.Button}>
              <Typography variant="label">ADD TO CART</Typography>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
