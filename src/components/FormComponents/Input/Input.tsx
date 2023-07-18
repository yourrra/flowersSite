import cn from 'classnames'
import { type InputHTMLAttributes, memo, forwardRef } from 'react'

import styles from './Input.module.css'
import { Label } from '../Label/Label'

type Props = {
  placeholder: string
  label: boolean
  title: string
  id: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    (
      {
        placeholder,
        label = false,
        title,
        id,
        className = '',
        ...htmlInputProps
      },
      ref,
    ) => {
      if (label) {
        return (
          <div className={styles.Wrapper}>
            <Label title={title} id={id} />
            <input
              id={id}
              type="text"
              placeholder={placeholder}
              className={cn(styles.Input, {}, className)}
              ref={ref}
              {...htmlInputProps}
            />
          </div>
        )
      }

      return (
        <input
          type="text"
          placeholder={placeholder}
          className={cn(styles.Input, {}, className)}
          ref={ref}
          {...htmlInputProps}
        />
      )
    },
  ),
)
