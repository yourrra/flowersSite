import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { Typography } from '@/components/Typography'
import * as URLS from '@/constants/urls'

import styles from './EmptyCart.module.css'

import cart from '@/assets/cart.svg'

export const EmptyCart = () => {
  return (
    <div className={styles.ContentCart}>
      <div className={styles.Empty}>
        <img src={cart} alt="cart" width={24} />
        <Typography variant="h2">Your bag is empty</Typography>
      </div>
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
