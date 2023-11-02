import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchItem } from '@/services/api'
import { Layout } from '@/components/Layout'
import { Item } from './components/Item'
import { RelatedProduct } from './components/RelatedProducts'

export function Product() {
  const { id } = useParams()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['item', id],
    queryFn: () => fetchItem(id || ''),
  })

  return (
    <Layout>
      <Item
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        id={id}
      />
      <RelatedProduct selectedCategory={data?.category} />
    </Layout>
  )
}
