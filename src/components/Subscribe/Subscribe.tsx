import { Button } from '../Button'
import { Input } from '../FormComponents/Input'

import styles from './Subscribe.module.css'

type Props = {
  id: string
}

export function Subscribe({ id }: Props) {
  return (
    <form className={styles.Wrapper}>
      <Input
        className={styles.Input}
        placeholder="E-mail"
        id={id}
        type="email"
        inputMode="email"
        name="email"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
