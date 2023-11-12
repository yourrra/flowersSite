import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/FormComponents/Input'
import { Typography } from '@/components/Typography'
import { TextArea } from '@/components/FormComponents/TextArea'
import { observer } from 'mobx-react-lite'
import formStore from '@/stores/FormStore'
import { FormState, UseFormReturn } from 'react-hook-form'
import { ChangeEvent } from 'react'

import styles from './Details.module.css'

type Props = {
  register: UseFormReturn<FormData>['register']
  errors: FormState<FormData>['errors']
}

export const Details = observer(({ register, errors }: Props) => {
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

  const handlePhoneInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value
    e.target.value = phoneFormat(phoneNumber)
    formStore.updateField('phoneNumber', e.target.value)
  }

  const handleInputChange = (fieldName: string, value: string | boolean) => {
    formStore.updateField(fieldName, value)
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
            onChange={e => handleInputChange('firstName', e.target.value)}
            errors={errors.firstName}
            className={styles.Input}
          />
          <Input
            {...register('lastName')}
            label={'Last name'}
            id="n2"
            required
            onChange={e => handleInputChange('lastName', e.target.value)}
            errors={errors.lastName}
            className={styles.Input}
          />
        </div>
        <Input
          {...register('companyName')}
          label={'Company name'}
          id="n3"
          onChange={e => handleInputChange('companyName', e.target.value)}
          required
          errors={errors.companyName}
        />
        <Input
          {...register('country')}
          label={'Country'}
          id="c1"
          onChange={e => handleInputChange('country', e.target.value)}
          required
          errors={errors.country}
        />
        <Input
          {...register('streetAddress')}
          label={'Street address'}
          id="s1"
          onChange={e => handleInputChange('streetAddress', e.target.value)}
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
            onChange={e => handleInputChange('email', e.target.value)}
            errors={errors.email}
          />
        </div>
      </fieldset>
      <div className={styles.Checkbox}>
        <Checkbox
          {...register('createAccount')}
          label={'Create an account?'}
          id={'1'}
          checked={formStore.data.createAccount}
          onCheckedChange={() => {
            formStore.updateField(
              'createAccount',
              !formStore.data.createAccount,
            )
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
        onChange={e => handleInputChange('orderNotes', e.target.value)}
        errors={errors.orderNotes}
      />
    </section>
  )
})
