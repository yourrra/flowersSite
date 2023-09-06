import { Layout } from '@/components/Layout'
import { Details } from './components/Details'
import { YourOrder } from './components/YourOrder/YourOrder'
import { Typography } from '@/components/Typography'

import styles from './Order.module.css'

export function Order() {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <Typography tag="h1" variant="h1" className={styles.Title}>
          Checkout
        </Typography>
        <form className={styles.Forms}>
          <Details />
          <YourOrder />
        </form>
      </div>
    </Layout>
  )
}
