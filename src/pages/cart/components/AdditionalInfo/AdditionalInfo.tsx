import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { TextArea } from '@/components/FormComponents/TextArea'
import { Link } from '@/components/Link'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'
import * as URLS from '@/constants/urls'
import { useForm } from 'react-hook-form'
import formStore from '@/stores/FormStore'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaInput } from '@/schema/schemaInput'

import styles from './AdditionalInfo.module.css'

export const AdditionalInfo = observer(() => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      orderNotes: formStore.data.orderNotes,
    },
    mode: 'onBlur',
    resolver: yupResolver(schemaInput),
  })

  const handleInputChange = (fieldName: string, value: string | boolean) => {
    formStore.updateField(fieldName, value)
  }

  return (
    <div>
      <Typography variant="h2" className={styles.Title}>
        Additional information
      </Typography>
      <TextArea
        {...register('orderNotes')}
        label={'Order notes'}
        id={'t2'}
        className={styles.TextArea}
        onChange={e => handleInputChange('orderNotes', e.target.value)}
        errors={errors.orderNotes}
      />
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
