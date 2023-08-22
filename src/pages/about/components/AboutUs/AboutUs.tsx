import { Typography } from '@/components/Typography'

import styles from './AboutUs.module.css'

export const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <Typography tag="h1" variant="h1" className={styles.Heading}>
        Who we are
      </Typography>
      <Typography tag="h2" variant="h2" className={styles.Description}>
        Flower shop Flowelove delivers flowers and gifts. We provide a wide
        range of products. Here you can always find roses of domestic production
        of various varieties, as well as such imported flowers as:
        chrysanthemums, tulips, gerberas, peonies, hydrangeas, irises and
        alstromerias.
      </Typography>
    </section>
  )
}
