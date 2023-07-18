import { ButtonHTMLAttributes } from 'react'
import arrow from '../../../assets/arrow-down.svg'
import styles from './Arrow.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Arrow = ({ className, ...htmlButtonProps }: Props) => {
  return (
    <button type="button" className={className} {...htmlButtonProps}>
      <img className={styles.Arrow} src={arrow} alt="arrow" />
    </button>
  )
}
