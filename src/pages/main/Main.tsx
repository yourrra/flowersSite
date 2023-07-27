import { Layout } from '@/components/Layout'
import { Heading } from './components/Heading'
import { Input } from '@/components/FormComponents/Input'
import { Card } from '@/components/Card'

import flower from '../../assets/flower-one.jpg'

export function Main() {
  return (
    <Layout>
      <Heading />
      <Input id={'123'} label="sf32rdsa" required />
      <Input id={'123'} label="sf32rdsa" />
      <Card
        img={flower}
        title={'Orange Rose Espana 70 cm'}
        price={'$1024.99'}
      />
    </Layout>
  )
}
