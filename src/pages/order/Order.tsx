import { Layout } from '@/components/Layout'
import { Details } from './components/Details'
import { YourOrder } from './components/YourOrder/YourOrder'
import { Typography } from '@/components/Typography'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { schemaInput } from '@/schema/schemaInput'
import { Modal } from '@/components/Modal'
import { GoodBuy } from './components/GoodBuy'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import formStore from '@/stores/FormStore'
import cartStore from '@/stores/CartStore'

import styles from './Order.module.css'

export const Order = observer(() => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: formStore.data.firstName,
      lastName: formStore.data.lastName,
      companyName: formStore.data.companyName,
      country: formStore.data.country,
      streetAddress: formStore.data.streetAddress,
      phoneNumber: formStore.data.phoneNumber,
      email: formStore.data.email,
      createAccount: formStore.data.createAccount,
      orderNotes: formStore.data.orderNotes,
      payment: formStore.data.payment,
    },
    mode: 'onBlur',
    resolver: yupResolver(schemaInput),
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    reset()
    cartStore.clearCartItem()
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Layout>
      <div className={styles.Wrapper}>
        <Typography tag="h1" variant="h1" className={styles.Title}>
          Checkout
        </Typography>
        <form className={styles.Forms} onSubmit={handleSubmit(onSubmit)}>
          <Details register={register} errors={errors} />
          <YourOrder register={register} control={control} />
        </form>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <GoodBuy />
      </Modal>
    </Layout>
  )
})
