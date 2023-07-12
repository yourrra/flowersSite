import { Typography } from '../Typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import checkLogo from '../../assets/checkbox-wh.svg'
import cn from 'classnames'

import styles from './Checkbox.module.css'

type Props = {
  id: string
  label: string
  checked: RadixCheckbox.CheckboxProps['checked']
  onCheckedChange: RadixCheckbox.CheckboxProps['onCheckedChange']
}

export function Checkbox({ label, id, checked, onCheckedChange }: Props) {
  return (
    <form>
      <div className={styles.Wrapper}>
        <RadixCheckbox.Root
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={cn(styles.Checkbox, {
            [styles.isChecked]: checked,
          })}
          id={id}
        >
          <RadixCheckbox.Indicator className={styles.Indicator}>
            <img src={checkLogo} alt="" width={10} height={7.5} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label htmlFor={id}>
          <Typography variant="label">{label}</Typography>
        </label>
      </div>
    </form>
  )
}
