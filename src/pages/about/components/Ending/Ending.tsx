import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'

import styles from './Ending.module.css'

export const Ending = () => {
  return (
    <section className={styles.Ending}>
      <Typography variant="special" className={styles.EndingText}>
        We deliver only freshly cut flowers.
      </Typography>
      <Button variant="red">GO TO SHOP</Button>
    </section>
  )
}
