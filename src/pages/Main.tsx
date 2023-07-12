import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Link } from '../components/Link'
import { RadioGroup } from '../components/RadioGroup'

import cart from '../assets/cart.svg'
import phone from '../assets/phone.svg'
import { Logo } from '../components/Logo'

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
      <Link
        type="a"
        props={{ href: 'tel:+80509379992' }}
        icon={phone}
        variant="accent"
      >
        +8 050 937 99 92
      </Link>
      <Link type="link" props={{ to: '/cart' }} icon={cart}>
        Cart
      </Link>
      <Logo />
    </>
  )
}
