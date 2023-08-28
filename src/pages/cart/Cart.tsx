import { Layout } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import * as URLS from '../../constants/urls'

import styles from './Cart.module.css'

import cart from '../../assets/cart.svg'

export function Cart() {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <Typography tag="h1" variant="h1" className={styles.Title}>
          Cart
        </Typography>
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
      </div>
    </Layout>
  )
}
