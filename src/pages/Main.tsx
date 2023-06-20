import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'

export function Main() {
  return (
    <>
      <Button variant="blue">Main</Button>
      <Button variant="red">Main</Button>
      <Button disabled>Main</Button>
      <Checkbox text={'Main'} />
    </>
  )
}
