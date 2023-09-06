import { Typography } from '@/components/Typography'

import styles from './Description.module.css'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <Typography variant="h2-extra" className={styles.TextBlock}>
        Our bouquets are of high quality and with proper care please the
        recipient for more than a week. A bouquet of beautiful flowers is
        relevant everywhere and always. Therefore, the flower shop BuketLand is
        ready to deliver the bouquet right now if you would like to please
        someone unusual and memorable to you.
      </Typography>
    </section>
  )
}
