import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/FormComponents/Input'
import { Typography } from '@/components/Typography'
import { useState } from 'react'
import { TextArea } from '@/components/FormComponents/TextArea'

import styles from './Details.module.css'

export const Details = ({ register, errors }) => {
  const [isChecked, setIsChecked] = useState(false)

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
      <TextArea label={'Order notes'} id={'t1'} maxLength={1000} />
    </section>
  )
}
