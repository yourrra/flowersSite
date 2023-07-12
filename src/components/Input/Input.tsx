import cn from 'classnames'
import { type InputHTMLAttributes, memo, forwardRef } from 'react'
import { Typography } from '../Typography'
import arrow from '../../assets/arrow-down.svg'

import styles from './Input.module.css'

type Props = {
  placeholder: string
  title: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    ({ placeholder, title, className = '', ...htmlInputProps }, ref) => {
      return (
        <div className={styles.Wrapper}>
          <Typography variant="label">{title}</Typography>
          <div className={styles.InputWrapper}>
            <form>
              <input
                type="text"
                placeholder={placeholder}
                className={cn(styles.Input, {}, className)}
                ref={ref}
                {...htmlInputProps}
              />
            </form>
            <div className={styles.InputButton}>
              <button>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      )
    },
  ),
)
