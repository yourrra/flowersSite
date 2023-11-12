import { Typography } from '@/components/Typography'
import { RadioGroup } from '@/components/RadioGroup'
import { Button } from '@/components/Button'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'
import { UseFormReturn } from 'react-hook-form'

import styles from './YourOrder.module.css'

type Props = {
  register: UseFormReturn<FormData>['register']
  control: UseFormReturn<FormData>['control']
}

export const YourOrder = observer(({ control, register }: Props) => {
  const cartItems: CartItem[] = cartStore.getCartItems()

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
            {cartStore.cartItems.map(item => (
              <div className={styles.Total}>
                <Typography variant="h3" className={styles.GrayText}>
                  {`${item.name} x ${item.quantity}`}
                </Typography>
                <Typography variant="h3">
                  ${item.price * item.quantity}
                </Typography>
              </div>
            ))}
            <div className={styles.Total}>
              <Typography variant="h3">Subtotal</Typography>
              <Typography variant="h3">${cartStore.total}</Typography>
            </div>
            <div className={styles.Total}>
              <Typography variant="h3">Total</Typography>
              <Typography variant="h3">${cartStore.total}</Typography>
            </div>
          </div>
          <div className={styles.WhiteBack}>
            <div className={styles.WrapperTotal}>
              <fieldset className={styles.FieldSet}>
                <RadioGroup
                  {...register('payment')}
                  name="payment"
                  group={[
                    { id: 'r1', label: 'Direct bank transfer', value: 'r1' },
                    { id: 'r2', label: 'Check payments', value: 'r2' },
                    { id: 'r3', label: 'Cash on delivery', value: 'r3' },
                  ]}
                  control={control}
                />
              </fieldset>
              <hr />
              <div>
                <Button variant="red" type="submit">
                  Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
