import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { observer } from 'mobx-react-lite'
import { Typography } from '../Typography'
import { UseFormReturn, useController } from 'react-hook-form'

import styles from './RadioGroup.module.css'
import formStore from '@/stores/FormStore'
import { forwardRef } from 'react'

type Group = {
  id: string
  label: string
  value: string
  itemProps?: Omit<RadixRadioGroup.RadioGroupItemProps, 'id' | 'value'>
  indicatorProps?: RadixRadioGroup.RadioGroupIndicatorProps
}

type Props = {
  group: Group[]
  name: string
  control: UseFormReturn['control']
} & RadixRadioGroup.RadioGroupProps

export const RadioGroup = observer(
  forwardRef<HTMLInputElement, Props>(
    ({ group, name, control, ...radixRadioGroupProps }) => {
      const {
        field: { ref, onChange, value },
        fieldState: { invalid, error },
      } = useController({
        name,
        control,
      })

      const handleRadioChange = value => {
        onChange(value)
        formStore.updateField(name, value)
      }

      return (
        <RadixRadioGroup.Root
          className={styles.RadioGroup}
          {...radixRadioGroupProps}
          onValueChange={handleRadioChange}
          defaultValue={value}
          value={value}
        >
          {group.map(
            ({ id, label, value, itemProps = {}, indicatorProps = {} }) => (
              <div key={id} className={styles.RadioButtonContainer}>
                <RadixRadioGroup.Item
                  className={styles.RadioGroupItem}
                  value={value}
                  id={id}
                  ref={ref}
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
          {invalid && <span style={{ color: 'red' }}>{error?.message}</span>}
        </RadixRadioGroup.Root>
      )
    },
  ),
)
