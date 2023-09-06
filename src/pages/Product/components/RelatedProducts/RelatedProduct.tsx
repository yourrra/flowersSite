import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'

import styles from './RelatedProduct.module.css'

import flower from '../../../../assets/flower-one.jpg'

export const RelatedProduct = () => {
  const testItems = [
    {
      title: 'Flower1',
      price: '300$',
      img: flower,
      id: '1',
    },
    {
      title: 'Flower2',
      price: '300$',
      img: flower,
      id: '2',
    },
    {
      title: 'Flower3',
      price: '300$',
      img: flower,
      id: '3',
    },
    {
      title: 'Flower4',
      price: '300$',
      img: flower,
      id: '4',
    },
    {
      title: 'Flower5',
      price: '300$',
      img: flower,
      id: '5',
    },
  ]

  return (
    <section className={styles.Wrapper}>
      <Typography tag="h2" variant="h2" className={styles.Title}>
        Related Products
      </Typography>
      <div className={styles.Cards}>
        {testItems.map(e => (
          <Card title={e.title} price={e.price} img={e.img} id={e.id} />
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
