import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'
import { useQuery } from '@tanstack/react-query'
import { fetchItems } from '@/services/api'
import { useState } from 'react'

import styles from './RelatedProduct.module.css'

import flower from '../../../../assets/flower-one.jpg'

type Props = {
  selectedCategory: string
}

export const RelatedProduct = ({ selectedCategory }: Props) => {
  const [visibleItems, setVisibleItems] = useState(5)
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['items', selectedCategory],
    queryFn: () => fetchItems(selectedCategory),
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  const showMore = () => {
    if (visibleItems < data.length)
      setVisibleItems(prevVisibleItems => prevVisibleItems + 5)
  }

  return (
    <section className={styles.Wrapper}>
      <Typography tag="h2" variant="h2" className={styles.Title}>
        Related Products
      </Typography>
      <div className={styles.Cards}>
        {isSuccess &&
          data
            .slice(0, visibleItems)
            .map(item => (
              <Card
                title={item.name}
                price={item.price}
                img={item.image}
                id={item.id}
              />
            ))}
      </div>
      <div className={styles.ShowMore}>
        <button
          type="button"
          className={styles.Button}
          onClick={showMore}
          disabled={visibleItems >= data.length}
        >
          Show more
        </button>
      </div>
    </section>
  )
}
