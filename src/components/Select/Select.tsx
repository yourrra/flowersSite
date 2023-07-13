import * as RadixSelect from '@radix-ui/react-select'
import classnames from 'classnames'
import { PropsWithChildren, SelectHTMLAttributes, forwardRef } from 'react'
import { Typography } from '../Typography'
import arrowIcon from '../../assets/arrow-bl.svg'

import styles from './Select.module.css'

type Props = PropsWithChildren & SelectHTMLAttributes<HTMLSelectElement>

export function Select() {
  const SelectItem = forwardRef<HTMLSelectElement, Props>(
    ({ children, className, ...htmlSelectProps }, ref) => {
      return (
        <RadixSelect.Item
          className={classnames(styles.SelectItem, className)}
          {...htmlSelectProps}
          ref={ref}
        >
          <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
          <RadixSelect.ItemIndicator className={styles.SelectItemIndicator}>
            {/* <CheckIcon /> */}
          </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
      )
    },
  )

  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className={styles.SelectTrigger} aria-label="Food">
        <RadixSelect.Value placeholder="Lang" />
        <RadixSelect.Icon className={styles.SelectIcon}>
          <img src={arrowIcon} alt="arrowIcon" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={styles.SelectContent}>
          <RadixSelect.Viewport className={styles.SelectViewport}>
            <RadixSelect.Group>
              <RadixSelect.Label className={styles.SelectLabel}>
                Lang
              </RadixSelect.Label>
              <SelectItem value="eng">
                <Typography variant="link">ENG</Typography>
              </SelectItem>
              <SelectItem value="ru">
                <Typography variant="link">RU</Typography>
              </SelectItem>
              <SelectItem value="fren">
                <Typography variant="link">FREN</Typography>
              </SelectItem>
              <SelectItem value="ger">
                <Typography variant="link">GER</Typography>
              </SelectItem>
            </RadixSelect.Group>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
