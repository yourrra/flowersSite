import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/FormComponents/Input'
import { Typography } from '@/components/Typography'
import { useState } from 'react'
import { TextArea } from '@/components/FormComponents/TextArea'

import styles from './Details.module.css'

export const Details = ({ register, errors }) => {
  const [isChecked, setIsChecked] = useState(false)

  const phoneFormat = (phoneNumber: string, plus = false): string => {
    const startsWith = plus ? '+7' : '8'

    let phone = phoneNumber.replace(/[^0-9]/g, '')
    if (phone.startsWith('7') && plus) {
      phone = phone.substr(1)
    }
    if (phone.startsWith('8')) {
      phone = phone.substr(1)
    }

    return phone.replace(
      /(\d{3})(\d{3})(\d{2})(\d{2})/g,
      `${startsWith} ($1) $2-$3-$4`,
    )
  }

  const handlePhoneInputChange = e => {
    const phoneNumber = e.target.value
    e.target.value = phoneFormat(phoneNumber)
  }

  return (
    <section className={styles.Details}>
      <Typography variant="h2" className={styles.Title}>
        Billing details
      </Typography>
      <fieldset className={styles.WrapperInput}>
        <div className={styles.Couples}>
          <Input
            {...register('firstName')}
            label={'First name'}
            id="n1"
            required
            errors={errors.firstName}
            className={styles.Input}
          />
          <Input
            {...register('lastName')}
            label={'Last name'}
            id="n2"
            required
            errors={errors.lastName}
            className={styles.Input}
          />
        </div>
        <Input
          {...register('companyName')}
          label={'Company name'}
          id="n3"
          required
          errors={errors.companyName}
        />
        <Input
          {...register('country')}
          label={'Country'}
          id="c1"
          required
          errors={errors.country}
        />
        <Input
          {...register('streetAddress')}
          label={'Street address'}
          id="s1"
          required
          errors={errors.streetAddress}
        />
        <div className={styles.Couples}>
          <Input
            {...register('phoneNumber')}
            label={'Phone'}
            id="p1"
            optionalStar
            type="tel"
            inputMode="tel"
            autoComplete="phone"
            onChange={handlePhoneInputChange}
            errors={errors.phoneNumber}
          />
          <Input
            {...register('email')}
            label={'Email address'}
            id="e1"
            optionalStar
            type="email"
            inputMode="email"
            autoComplete="email"
            errors={errors.email}
          />
        </div>
      </fieldset>
      <div className={styles.Checkbox}>
        <Checkbox
          label={'Create an account?'}
          id={'1'}
          checked={isChecked}
          onCheckedChange={() => {
            setIsChecked(!isChecked)
          }}
        />
      </div>
      <Typography variant="h2" className={styles.Title}>
        Additional information
      </Typography>
      <TextArea
        {...register('orderNotes')}
        label={'Order notes'}
        id={'t1'}
        errors={errors.orderNotes}
      />
    </section>
  )
}
