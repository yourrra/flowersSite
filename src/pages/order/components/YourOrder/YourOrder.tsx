import { Typography } from '@/components/Typography'

import styles from './YourOrder.module.css'
import { RadioGroup } from '@/components/RadioGroup'
import { Button } from '@/components/Button'

export const YourOrder = () => {
  return (
    <section className={styles.YourOrder}>
      <Typography variant="h2" className={styles.Title}>
        Your order
      </Typography>
      <div className={styles.GrayBack}>
        <div className={styles.Wrapper}>
          <div className={styles.TotalGroup}>
            <div className={styles.Total}>
              <Typography variant="h3" className={styles.GrayText}>
                Product
              </Typography>
              <Typography variant="h3" className={styles.GrayText}>
                Total
              </Typography>
            </div>
            <div className={styles.Total}>
              <Typography variant="h3" className={styles.GrayText}>
                Orange Rose España 70 cm × 1
              </Typography>
              <Typography variant="h3">$98.98</Typography>
            </div>
            <div className={styles.Total}>
              <Typography variant="h3">Subtotal</Typography>
              <Typography variant="h3">$98.98</Typography>
            </div>
            <div className={styles.Total}>
              <Typography variant="h3">Total</Typography>
              <Typography variant="h3">$98.98</Typography>
            </div>
          </div>
          <div className={styles.WhiteBack}>
            <div className={styles.WrapperTotal}>
              <fieldset className={styles.FieldSet}>
                <RadioGroup
                  group={[
                    { id: 'r1', label: 'Direct bank transfer', value: 'r1' },
                    { id: 'r2', label: 'Check payments', value: 'r2' },
                    { id: 'r3', label: 'Cash on delivery', value: 'r3' },
                  ]}
                />
              </fieldset>
              <hr />
              <Button variant="red">Order</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
