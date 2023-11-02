import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { TextArea } from '@/components/FormComponents/TextArea'
import { Link } from '@/components/Link'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'
import * as URLS from '@/constants/urls'

import styles from './AdditionalInfo.module.css'

export const AdditionalInfo = observer(() => {
  return (
    <div>
      <Typography variant="h2" className={styles.Title}>
        Additional information
      </Typography>
      <TextArea label={'Order notes'} id={'t2'} className={styles.TextArea} />
      <div className={styles.Checkout}>
        <Typography variant="h3" className={styles.Total}>
          Total: ${cartStore.total}
        </Typography>
        <Typography className={styles.Description}>
          Delivery cost is calculated at checkout
        </Typography>
        <Link
          type="link"
          props={{
            to: URLS.ORDER,
          }}
        >
          <Button variant="red">CHECkOUT</Button>
        </Link>
      </div>
    </div>
  )
})
