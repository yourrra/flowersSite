import cn from 'classnames'
import { type InputHTMLAttributes, memo, forwardRef } from 'react'

import styles from './Input.module.css'
import { Label } from '../Label/Label'

type Props = {
  label?: string
  id: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    ({ label, id, className = '', ...htmlInputProps }, ref) => {
      return (
        <div className={styles.Wrapper}>
          {label && <Label label={label} htmlFor={id} />}
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
