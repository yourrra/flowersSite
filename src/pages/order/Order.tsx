import { Layout } from '@/components/Layout'
import { Details } from './components/Details'
import { YourOrder } from './components/YourOrder/YourOrder'
import { Typography } from '@/components/Typography'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schemaInput } from '@/schema/schemaInput'

import styles from './Order.module.css'

export function Order() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaInput),
  })
  const onSubmit = data => console.log(data)

  return (
    <Layout>
      <div className={styles.Wrapper}>
        <Typography tag="h1" variant="h1" className={styles.Title}>
          Checkout
        </Typography>
        <form className={styles.Forms} onSubmit={handleSubmit(onSubmit)}>
          <Details register={register} errors={errors} />
          <YourOrder />
        </form>
      </div>
    </Layout>
  )
}
