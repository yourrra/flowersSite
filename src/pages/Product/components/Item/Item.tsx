import { Typography } from '@/components/Typography'
import { CTA } from '@/components/CTA'
import { useQuery } from '@tanstack/react-query'
import { fetchItem } from '@/services/api'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'

import styles from './Item.module.css'

import flower from '../../../../assets/flower-two.jpg'

export const Item = observer(() => {
  const { id } = useParams()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['item', id],
    queryFn: () => fetchItem(id || ''),
  })

  const handleAddToCart = () => {
    if (data) {
      cartStore.addProduct(id, data.name, data.price, data.image)
    }
  }

  const cartItems: CartItem[] = cartStore.getCartItems()

  const quantity = cartItems.map(item => {
    if (id === item.id) {
      return item.quantity
    }
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Item}>
        <div>
          <img src={data.image} alt={flower} className={styles.Img} />
        </div>
        <div>
          <Typography tag="h1" variant="h1" className={styles.Name}>
            {data.name}
          </Typography>
          <div className={styles.Price}>
            <Typography variant="h3" className={styles.PriceOld}>
              ${data.price}
            </Typography>
            <Typography variant="h2-extra">${data.price}</Typography>
          </div>
          <div className={styles.Info}>
            <div>
              <Typography variant="label" className={styles.Title}>
                delivery date:
              </Typography>
              <Typography variant="link" className={styles.Text}>
                Tomorrow 12:15 - 12:45, {data.deliveryDate}
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.Title}>
                Categories:
              </Typography>
              <Typography variant="link" className={styles.Text}>
                {data.category}
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.Title}>
                Product Code:
              </Typography>
              <Typography variant="link" className={styles.Text}>
                {data.code}
              </Typography>
            </div>
          </div>
          <div className={styles.Description}>{data.description}</div>
          <CTA
            handleAddToCart={handleAddToCart}
            quantity={quantity | 0}
            id={id}
          />
        </div>
      </div>
    </section>
  )
})
