import { Layout } from '@/components/Layout'
import { Item } from './components/Item'
import { RelatedProduct } from './components/RelatedProducts'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

export function Product() {
  // const { id } = useParams()
  // const [item, setItem] = useState({})

  // useEffect(() => {
  //   fetch(`https://juniper-ringed-value.glitch.me/items/${id}`)
  //     .then(res => res.json())
  //     .then(data => setItem(data))
  // }, [id])

  return (
    <Layout>
      <Item />
      <RelatedProduct />
    </Layout>
  )
}
