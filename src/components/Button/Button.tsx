import cn from 'classnames'
import styles from './Button.module.css'
import {
  type PropsWithChildren,
  type ButtonHTMLAttributes,
  memo,
  forwardRef,
} from 'react'

type Props = PropsWithChildren<
  {
    variant?: 'red' | 'blue'
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button = memo(
  forwardRef<HTMLButtonElement, Props>(
    (
      { variant = 'blue', children, className = '', ...htmlButtonProps },
      ref,
    ) => {
      return (
        <button
          className={cn(
            styles.Button,
            {
              [styles.isBlue]: variant === 'blue',
              [styles.isRed]: variant === 'red',
            },
            className,
          )}
          ref={ref}
          {...htmlButtonProps}
        >
          {children}
        </button>
      )
    },
  ),
)
