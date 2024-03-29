import { type InputHTMLAttributes, memo, forwardRef } from 'react'
import { Label } from '../Label/Label'
import cn from 'classnames'

import styles from './Input.module.css'

type Props = {
  label?: string
  id: string
  required?: boolean
  optionalStar?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    (
      { label, id, required, className = '', optionalStar, ...htmlInputProps },
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
            className={cn(styles.Input, className)}
            ref={ref}
            {...htmlInputProps}
          />
        </div>
      )
    },
  ),
)
