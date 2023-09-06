import { Layout } from '@/components/Layout'
import { Item } from './components/Item'
import { RelatedProduct } from './components/RelatedProducts'

export function Product() {
  return (
    <Layout>
      <Item />
      <RelatedProduct />
    </Layout>
  )
}
