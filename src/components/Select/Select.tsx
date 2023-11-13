import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'
import { PropsWithChildren, SelectHTMLAttributes, forwardRef } from 'react'
import { Typography } from '../Typography'
import { observer } from 'mobx-react-lite'
import itemStore from '@/stores/ItemStore'

import styles from './Select.module.css'

import arrowIcon from '../../assets/arrow-bl.svg'

type option = {
  id: number
  value: string
  name: string
}

type Props = PropsWithChildren & SelectHTMLAttributes<HTMLSelectElement>

type PropsSelect = {
  label: string
  ValueChange?: () => void
  variant?: 'blue'
  options?: option[]
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectItem = forwardRef<HTMLSelectElement, Props>(
  ({ children, className, ...htmlSelectProps }, ref) => {
    return (
      <RadixSelect.Item
        className={cn(styles.SelectItem, className)}
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

export const Select = observer(
  ({
    label,
    variant,
    className = '',
    ValueChange,
    options,
    ...htmlSelectProps
  }: PropsSelect) => {
    return (
      <RadixSelect.Root onValueChange={ValueChange}>
        <RadixSelect.Trigger
          className={cn(styles.SelectTrigger, {
            [styles.isBlue]: variant === 'blue',
          })}
          aria-label={label}
        >
          <RadixSelect.Value placeholder={label} />

          <RadixSelect.Icon className={styles.SelectIcon}>
            <img src={arrowIcon} alt="arrowIcon" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.SelectContent}>
            <RadixSelect.Viewport className={styles.SelectViewport}>
              <RadixSelect.Group>
                {options?.map(option => (
                  <SelectItem value={option.value} key={option.id}>
                    <Typography variant={'link'} className={styles.Text}>
                      {option.name}
                    </Typography>
                  </SelectItem>
                ))}
              </RadixSelect.Group>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  },
)
