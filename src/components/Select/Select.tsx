import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'
import { PropsWithChildren, SelectHTMLAttributes, forwardRef } from 'react'
import { Typography } from '../Typography'

import styles from './Select.module.css'

import arrowIcon from '../../assets/arrow-bl.svg'

type option = {
  id: number
  value: string
  sort?: () => void
}

type Props = PropsWithChildren & SelectHTMLAttributes<HTMLSelectElement>

type PropsSelect = {
  label: string
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

export function Select({
  label,
  variant,
  className = '',
  options,
  ...htmlSelectProps
}: PropsSelect) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger
        className={cn(styles.SelectTrigger, {
          [styles.isBlue]: variant === 'blue',
        })}
        aria-label="Food"
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
                <SelectItem
                  value={option.value}
                  key={option.id}
                  onClick={option.sort}
                >
                  <Typography variant={'link'}>{option.value}</Typography>
                </SelectItem>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
