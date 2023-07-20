import { LabelHTMLAttributes, ReactNode } from 'react'
import { Typography } from '../../Typography'

type Props = {
  label: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ id, label }: Props) => {
  return (
    <label htmlFor={id}>
      <Typography variant="label">
        {label}
        <span>*</span>
      </Typography>
    </label>
  )
}
