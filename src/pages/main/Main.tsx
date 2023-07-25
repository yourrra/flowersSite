import { Layout } from '@components/Layout'
import { Heading } from './components/Heading'
import { Input } from '@components/FormComponents/Input'

export function Main() {
  return (
    <Layout>
      <Heading />
      <Input id={'123'} label="sf32rdsa" required />
      <Input id={'123'} label="sf32rdsa" />
    </Layout>
  )
}
