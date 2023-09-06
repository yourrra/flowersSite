import { LabelHTMLAttributes, ReactNode } from 'react'
import { Typography } from '../../Typography'

import styles from './Label.module.css'

type Props = {
  label: ReactNode
  optionalStar?: boolean
} & LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({
  id,
  label,
  optionalStar,
  ...htmlLabelProps
}: Props) => {
  return (
    <label htmlFor={id} {...htmlLabelProps}>
      <Typography variant="label">
        {label}
        {htmlLabelProps['aria-required'] && (
          <span className={styles.RedStar}>*</span>
        )}
        {optionalStar && <span className={styles.GrayStar}>*</span>}
      </Typography>
    </label>
  )
}
