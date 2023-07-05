import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { RadioGroup } from '../components/RadioGroup'

export function Main() {
  return (
    <>
      <Button variant="blue">Main</Button>
      <Button variant="red">Main</Button>
      <Button disabled>Main</Button>
      <Checkbox text={'Main'} />
      <RadioGroup
        group={[
          { id: '1', label: 'Test1', value: '1' },
          { id: '2', label: 'Test2', value: '2' },
          { id: '3', label: 'Test3', value: '3' },
        ]}
      />
    </>
  )
}
