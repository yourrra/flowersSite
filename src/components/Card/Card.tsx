import { Typography } from '../Typography'
import styles from './Card.module.css'

type Props = {
  imgAvif?: string
  imgWebP?: string
  imgJpg: string
  price: string
  title: string
  alt?: string
}

export function Card({ imgAvif, imgWebP, imgJpg, price, title, alt }: Props) {
  return (
    <div className={styles.Wrapper}>
      <picture>
        <source type="image/avif" srcSet={imgAvif} />
        <source type="image/webp" srcSet={imgWebP} />
        <img src={imgJpg} alt={alt} width={260} height={320} />
      </picture>
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
