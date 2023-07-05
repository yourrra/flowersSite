import styles from './Checkbox.module.css'
import {
  type PropsWithChildren,
  type InputHTMLAttributes,
  memo,
  forwardRef,
} from 'react'

type Props = PropsWithChildren<
  {
    text: string
  } & InputHTMLAttributes<HTMLInputElement>
>

export const Checkbox = memo(
  forwardRef<HTMLInputElement, Props>(({ text }, ref) => {
    return (
      <div className={styles.Wrapper}>
        <label>
          <input
            type="checkbox"
            name="ch1"
            ref={ref}
            className={styles.Checkbox}
          />
          <span className={styles.CustomCheckbox}></span>
          {text}
        </label>
      </div>
    )
  }),
)
