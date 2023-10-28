import { useState } from 'react'
import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'
import { useQuery } from '@tanstack/react-query'
import { fetchItems } from '@/services/api'
import cn from 'classnames'

import styles from './Items.module.css'

import arrow from '@/assets/arrow-bl.svg'
import { Select } from '@/components/Select'

export const Items = () => {
  const [visibleItems, setVisibleItems] = useState(15)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sort, setSort] = useState('popular')

  const { data, isLoading, isError, error } = useQuery({
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
      setVisibleItems(prevVisibleItems => prevVisibleItems + 15)
  }

  const filterItems = (category: string) => {
    setSelectedCategory(category)
    setVisibleItems(15)
  }

  const toggleSortOrder = (currentSort: string) => {
    setSort(currentSort)
  }

  const sortItems = () => {
    const sortedData = [...data]
    sortedData.sort((a, b) => {
      if (sort === 'price-up') {
        return parseFloat(b.price) - parseFloat(a.price)
      } else if (sort === 'price-down') {
        return parseFloat(a.price) - parseFloat(b.price)
      } else if (sort === 'A-Z') {
        return a.name.localeCompare(b.name)
      } else if (sort === 'Z-A') {
        return b.name.localeCompare(a.name)
      } else {
        return parseFloat(a.rating) - parseFloat(b.rating)
      }
    })
    return sortedData
  }

  const sortedData = sortItems()

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
            { id: 1, value: 'popular' },
            { id: 2, value: 'price-up' },
            { id: 3, value: 'price-down' },
            { id: 4, value: 'A-Z' },
            { id: 5, value: 'Z-A' },
          ]}
        />
        <button
          className={cn(styles.Sorting, {
            [styles.isActiveSorting]: sort === 'popular',
          })}
          onClick={() => toggleSortOrder('popular')}
        >
          popular
        </button>
        <button
          className={cn(styles.Sorting, {
            [styles.isActiveSorting]: sort === 'price-up',
          })}
          onClick={() => toggleSortOrder('price-up')}
        >
          price-up
        </button>
        <button
          className={cn(styles.Sorting, {
            [styles.isActiveSorting]: sort === 'price-down',
          })}
          onClick={() => toggleSortOrder('price-down')}
        >
          price-down
        </button>
        <button
          className={cn(styles.Sorting, {
            [styles.isActiveSorting]: sort === 'A-Z',
          })}
          onClick={() => toggleSortOrder('A-Z')}
        >
          A-Z
        </button>
        <button
          className={cn(styles.Sorting, {
            [styles.isActiveSorting]: sort === 'Z-A',
          })}
          onClick={() => toggleSortOrder('Z-A')}
        >
          Z-A
        </button>
        <div className={styles.Select}>
          <div>Sort</div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.Cards}>
        {sortedData.slice(0, visibleItems).map(item => (
          <Card
            key={item.id}
            title={item.name}
            price={item.price}
            img={item.image}
            id={item.id}
            rating={item.rating}
          />
        ))}
      </div>
      <div className={styles.ShowMore}>
        <button
          type="button"
          className={styles.Button}
          onClick={showMore}
          disabled={visibleItems > data.length}
        >
          Show more
        </button>
      </div>
    </section>
  )
}
