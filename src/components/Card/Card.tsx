import { Picture } from '../Picture'
import { Typography } from '../Typography'
import styles from './Card.module.css'

type Props = {
  img: string
  price: string
  title: string
}

export function Card({ img, price, title }: Props) {
  return (
    <div className={styles.Wrapper}>
      <Picture img={img} alt={img} />
      <div className={styles.TextBlock}>
        <Typography className={styles.Text} variant="normal">
          {title}
        </Typography>
        <Typography className={styles.Text} variant="label">
          {price}
        </Typography>
      </div>
    </div>
  )
}
