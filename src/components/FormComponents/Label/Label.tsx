import { Typography } from '../../Typography'

type Props = { title: string; id: string }

export const Label = ({ title, id }: Props) => {
  return (
    <label htmlFor={id}>
      <Typography variant="label">{title}</Typography>
    </label>
  )
}
