import { Typography } from '@/components/Typography'
import { Picture } from '@/components/Picture'

import styles from './History.module.css'

import tulip from '../../../../assets/tulip.jpg'

export const History = () => {
  return (
    <section className={styles.History}>
      <Picture img={tulip} className={styles.Tulip} />
      <div className={styles.TextHistory}>
        <Typography tag="h2" variant="h2" className={styles.Title}>
          Our history
        </Typography>
        <div className={styles.Text}>
          <Typography variant="big" className={styles.HistoryDescription}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.{' '}
          </Typography>
          <hr className={styles.Line} />
          <Typography variant="big" className={styles.HistoryDescription}>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </Typography>
        </div>
      </div>
    </section>
  )
}
