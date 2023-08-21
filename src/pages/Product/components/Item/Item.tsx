import { Typography } from '@/components/Typography'

import styles from './Item.module.css'

import flower from '../../../../assets/flower-two.jpg'

export const Item = () => {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Item}>
        <div>
          <img src={flower} alt={flower} className={styles.Img} />
        </div>
        <div>
          <Typography tag="h1" variant="h1" className={styles.Name}>
            Orange Rose España 70 cm
          </Typography>
          <div className={styles.Price}>
            <Typography variant="h3" className={styles.PriceOld}>
              $1024.99
            </Typography>
            <Typography variant="h2-extra">$1024.99</Typography>
          </div>
          <div className={styles.Info}>
            <div>
              <Typography variant="label" className={styles.Title}>
                delivery date:
              </Typography>
              <Typography variant="link" className={styles.Text}>
                Tomorrow 12:15 - 12:45
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.Title}>
                Categories:
              </Typography>
              <Typography variant="link" className={styles.Text}>
                Rose, Spain, Flowers
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.Title}>
                Product Code:
              </Typography>
              <Typography variant="link" className={styles.Text}>
                010140
              </Typography>
            </div>
          </div>
          <div className={styles.Description}>
            Orange Rose Espana 70 cm involuntarily attracts the eye. And the
            reason for this is its color - bright and joyful. This is one of the
            newest varieties of roses, bred by crossing two flowers - red and
            yellow. Espana has absorbed the meaning of these two representatives
            of a great group. Only here longing and passion turned into
            something brighter - into real joy
          </div>
        </div>
      </div>
    </section>
  )
}
