import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { Link } from '@/components/Link'
import * as URLS from '@/constants/urls'

import styles from './GoodBuy.module.css'

export const GoodBuy = () => {
  return (
    <div className={styles.Wrapper}>
      <Typography variant="special" className={styles.Title}>
        Thank you for your purchase
      </Typography>
      <Typography variant="label" className={styles.Status}>
        Your order is currently being processed and will be sent out for
        delivery soon.
      </Typography>
      <div>
        <Button variant="blue">
          <Link
            type="link"
            props={{
              to: URLS.MAIN,
              className: styles.ButtonLink,
            }}
          >
            Go to shop
          </Link>
        </Button>
      </div>
    </div>
  )
}
