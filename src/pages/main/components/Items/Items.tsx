import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import itemStore from '@/stores/ItemStore'
import { Card } from '@/components/Card'
import { Select } from '@/components/Select'
import { Typography } from '@/components/Typography'
import cn from 'classnames'

import styles from './Items.module.css'

import arrow from '@/assets/arrow-bl.svg'

export const Items = observer(() => {
  const { data, visibleItems, selectedCategory, sortedData } = itemStore

  const showMore = () => {
    itemStore.setShowMore()
  }

  const filterItems = (category: string) => {
    itemStore.filterItems(category)
  }

  useEffect(() => {
    itemStore.fetchData()
  }, [])

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Sort}>
        <div className={styles.ButtonWrapper}>
          <button
            type="button"
            className={styles.Button}
            onClick={() => filterItems('all')}
          >
            <Typography
              variant="link"
              className={cn({
                [styles.isActiveButton]: selectedCategory === 'all',
              })}
            >
              All flowers
            </Typography>
          </button>
          <button
            type="button"
            className={styles.Button}
            onClick={() => filterItems('gifts')}
          >
            <Typography
              variant="link"
              className={cn({
                [styles.isActiveButton]: selectedCategory === 'gifts',
              })}
            >
              Gifts
            </Typography>
          </button>
          <button
            type="button"
            className={styles.Button}
            onClick={() => filterItems('roses')}
          >
            <Typography
              variant="link"
              className={cn({
                [styles.isActiveButton]: selectedCategory === 'roses',
              })}
            >
              Roses
            </Typography>
          </button>
          <button
            type="button"
            className={styles.Button}
            onClick={() => filterItems('occasion')}
          >
            <Typography
              variant="link"
              className={cn({
                [styles.isActiveButton]: selectedCategory === 'occasion',
              })}
            >
              Occasion
            </Typography>
          </button>
        </div>
        <Select
          label={'Sort'}
          options={[
            {
              id: 1,
              value: 'bestSelling',
              name: 'Best selling',
            },
            { id: 2, value: 'a-z', name: 'A-Z' },
            { id: 3, value: 'z-a', name: 'Z-A' },
            {
              id: 4,
              value: 'priceLow',
              name: 'Price, low to high',
            },
            {
              id: 5,
              value: 'priceHigh',
              name: 'Price, high to low',
            },
          ]}
        />
      </div>
      <div className={styles.Cards}>
        {sortedData.slice(0, visibleItems).map(item => (
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
})
