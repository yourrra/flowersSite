import { Button } from '../Button'
import { Input } from '../FormComponents/Input'

import styles from './Subscribe.module.css'

export function Subscribe() {
  return (
    <form className={styles.Wrapper}>
      <Input
        className={styles.Input}
        placeholder="E-mail"
        id="subscribe-form"
        type="email"
        inputMode="email"
        name="email"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
