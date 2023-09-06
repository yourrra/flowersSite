import { forwardRef, memo } from 'react'
import { TextareaHTMLAttributes } from 'react'
import { Label } from '../Label/Label'
import cn from 'classnames'

import styles from './TextArea.module.css'

type Props = {
  label?: string
  id: string
  required?: boolean
  optionalStar?: boolean
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'>

export const TextArea = memo(
  forwardRef<HTMLTextAreaElement, Props>(
    (
      {
        label,
        id,
        required,
        className = '',
        optionalStar,
        ...htmlTextAreaProps
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
          <textarea
            placeholder={label}
            id={id}
            className={cn(styles.TextArea, className)}
            ref={ref}
            {...htmlTextAreaProps}
          />
        </div>
      )
    },
  ),
)
