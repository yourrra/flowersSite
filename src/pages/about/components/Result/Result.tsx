import { Typography } from '@/components/Typography'

import styles from './Result.module.css'

export const Result = () => {
  return (
    <section className={styles.Result}>
      <div className={styles.WrapperResult}>
        <div>
          <Typography variant="label" className={styles.TextResult}>
            Active shops:
          </Typography>
          <Typography variant="h2-extra" className={styles.TextResult}>
            4,000+
          </Typography>
        </div>
        <div>
          <Typography variant="label" className={styles.TextResult}>
            Cities:
          </Typography>
          <Typography variant="h2-extra" className={styles.TextResult}>
            1,800+
          </Typography>
        </div>
        <div>
          <Typography variant="label" className={styles.TextResult}>
            Delivered Flowers:
          </Typography>
          <Typography variant="h2-extra" className={styles.TextResult}>
            950,100+
          </Typography>
        </div>
        <div>
          <Typography variant="label" className={styles.TextResult}>
            Customers pre year:
          </Typography>
          <Typography variant="h2-extra" className={styles.TextResult}>
            200,000+
          </Typography>
        </div>
      </div>
    </section>
  )
}
