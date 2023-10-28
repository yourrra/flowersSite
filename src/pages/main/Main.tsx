import { Layout } from '@/components/Layout'
import { Heading } from './components/Heading'
import { Items } from './components/Items'
import { Select } from '@/components/Select'

export function Main() {
  return (
    <Layout>
      <Heading />
      <Select
        variant="blue"
        label="ENG"
        items={[
          { id: 1, option: 'EN' },
          { id: 2, option: 'FRAN' },
          { id: 3, option: 'AST' },
        ]}
      />
      <Select label="Sort" />
      <Items />
    </Layout>
  )
}
