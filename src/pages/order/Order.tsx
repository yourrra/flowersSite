import { Layout } from '@/components/Layout'
import { Details } from './components/Details'
import { YourOrder } from './components/YourOrder/YourOrder'
import { Typography } from '@/components/Typography'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import styles from './Order.module.css'

const schema = yup.object({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .min(2, 'First name should be at least 2 characters')
    .max(20, 'First name should be at most 20 characters')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .min(2, 'Last name should be at least 2 characters')
    .max(20, 'Last name should be at most 20 characters')
    .required('Last name is a required field'),
  companyName: yup
    .string()
    .matches(
      /^[a-zA-Z0-9\s\-,.']+$/,
      'Company name should only contain letters, numbers, spaces, and basic punctuation',
    )
    .required('Company Name is a required field'),
  streetAddress: yup
    .string()
    .required('Street Address is a required field')
    .matches(
      /^[a-zA-Z0-9\s\-,.'/]+$/,
      'Street address should only contain letters, numbers, spaces, and basic punctuation',
    ),
  phoneNumber: yup
    .string()
    .matches(/^[0-9+()-\s]{17}$/, 'Phone number should be 10 digits')
    .required('Email is a required field'),
  email: yup
    .string()
    .email('Email should have correct format')
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Email should have a valid domain')
    .required('Email is a required field'),
})

export function Order() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
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
