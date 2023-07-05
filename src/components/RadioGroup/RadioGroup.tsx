import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { Typography } from '../Typography'

import styles from './RadioGroup.module.css'

type Group = {
  id: string
  label: string
  value: string
  itemProps?: Omit<RadixRadioGroup.RadioGroupItemProps, 'id' | 'value'>
  indicatorProps?: RadixRadioGroup.RadioGroupIndicatorProps
}

type Props = {
  group: Group[]
} & RadixRadioGroup.RadioGroupProps

export function RadioGroup({ group, ...radixRadioGroupProps }: Props) {
  return (
    <RadixRadioGroup.Root
      className={styles.RadioGroup}
      {...radixRadioGroupProps}
    >
      {group.map(
        ({ id, label, value, itemProps = {}, indicatorProps = {} }) => (
          <div key={id} className={styles.RadioButtonContainer}>
            <RadixRadioGroup.Item
              className={styles.RadioGroupItem}
              value={value}
              id={id}
              {...itemProps}
            >
              <RadixRadioGroup.Indicator
                className={styles.RadioGroupIndicator}
                {...indicatorProps}
              />
            </RadixRadioGroup.Item>
            <label htmlFor={id}>
              <Typography variant="label">{label}</Typography>
            </label>
          </div>
        ),
      )}
    </RadixRadioGroup.Root>
  )
}
