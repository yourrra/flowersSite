import { Typography } from '@/components/Typography'
import { CTA } from '@/components/CTA'
import { observer } from 'mobx-react-lite'
import cartStore, { CartItem } from '@/stores/CartStore'
import { UItem } from '@/type/item'

import styles from './Item.module.css'

import flower from '../../../../assets/flower-two.jpg'

type Props = {
  data: UItem
  isLoading: any
  isError: any
  error: any
  id: string
}

export const Item = observer(
  ({ data, isLoading, isError, error, id }: Props) => {
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

    const formatDate = (dataUp: string) => {
      const date = new Date(dataUp)
      const month = date.toLocaleString('en-US', { month: 'long' })
      const day = date.getDate()
      const time = date.toLocaleTimeString().slice(0, -3)

      return `${day} ${month} , ${time}`
    }

    const formattedDate = formatDate(data.deliveryDate)

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
                  {formattedDate}
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
              quantity={quantity}
              id={id}
            />
          </div>
        </div>
      </section>
    )
  },
)
