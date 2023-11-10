import { type InputHTMLAttributes, memo, forwardRef } from 'react'
import { Label } from '../Label/Label'
import cn from 'classnames'

import styles from './Input.module.css'

type Props = {
  label?: string
  id: string
  errors?: any
  required?: boolean
  optionalStar?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    (
      {
        label,
        errors,
        id,
        required,
        className = '',
        optionalStar,
        ...htmlInputProps
      },
      ref,
    ) => {
      return (
        <div className={styles.Wrapper}>
          {label && (
            <Label
              label={label}
              htmlFor={id}
              aria-required={required}
              optionalStar={optionalStar}
            />
          )}

          <input
            placeholder={label}
            id={id}
            className={cn(
              styles.Input,
              {
                [styles.isInputError]: errors,
              },
              className,
            )}
            ref={ref}
            {...htmlInputProps}
          />
          {errors && <p className={styles.Error}>{errors.message}</p>}
        </div>
      )
    },
  ),
)
