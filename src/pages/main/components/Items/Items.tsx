import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'
import { useQuery } from '@tanstack/react-query'
import { fetchItems } from '@/services/api'

import styles from './Items.module.css'

import arrow from '@/assets/arrow-bl.svg'

export const Items = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Sort}>
        <div className={styles.ButtonWrapper}>
          <button type="button" className={styles.Button}>
            <Typography variant="link">All flowers</Typography>
          </button>
          <button type="button" className={styles.Button}>
            <Typography variant="link"> Gifts</Typography>
          </button>
          <button type="button" className={styles.Button}>
            <Typography variant="link">Roses</Typography>
          </button>
          <button type="button" className={styles.Button}>
            <Typography variant="link">Occasion</Typography>
          </button>
        </div>
        <div className={styles.Select}>
          <div>Sort</div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.Cards}>
        {data.map(item => (
          <Card
            key={item.id}
            title={item.name}
            price={item.price}
            img={item.image}
            id={item.id}
          />
        ))}
      </div>
      <div className={styles.ShowMore}>
        <button type="button" className={styles.Button}>
          Show more
        </button>
      </div>
    </section>
  )
}
