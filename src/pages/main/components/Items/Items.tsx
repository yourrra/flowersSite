import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'

import styles from './Items.module.css'

import flower from '../../../../assets/flower-one.jpg'
import arrow from '../../../../assets/arrow-bl.svg'

export const Items = () => {
  const testItems = [
    {
      title: 'Flower1',
      price: '300$',
      img: flower,
    },
    {
      title: 'Flower2',
      price: '300$',
      img: flower,
    },
    {
      title: 'Flower3',
      price: '300$',
      img: flower,
    },
    {
      title: 'Flower4',
      price: '300$',
      img: flower,
    },
    {
      title: 'Flower5',
      price: '300$',
      img: flower,
    },
  ]

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
        {testItems.map(e => (
          <Card title={e.title} price={e.price} img={e.img} />
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
