import { Link } from '../Link'
import * as URLS from '../../constants/urls'
import { Logo } from '../Logo'
import { useLocation } from 'react-router-dom'
import { Menu } from '@/components/Menu'
import { useState } from 'react'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import cartStore from '@/stores/CartStore'

import phone from '../../assets/phone.svg'
import menu from '../../assets/menu.svg'
import cart from '../../assets/cart.svg'
import arrow from '../../assets/arrow-bl.svg'
import map from '../../assets/map.svg'

import styles from './Header.module.css'
import { Select } from '../Select'

export const Header = observer(() => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.Wrapper}>
      <header className={styles.Header}>
        <div className={styles.HeaderTop}>
          <div className={styles.LogoBig}>
            <Logo />
          </div>
          <div className={styles.LogoSmall}>
            <Logo variant="small" />
          </div>
          <div className={styles.Delivery}>
            <div className={styles.City}>
              <img src={map} alt="map" />
              <div>Send flowers to </div>
              <Select
                label={'City'}
                defaultValue={'City'}
                variant="blue"
                options={[
                  {
                    id: 1,
                    value: 'rome',
                    name: 'Rome',
                  },
                  { id: 2, value: 'madrid', name: 'Madrid' },
                  { id: 3, value: 'berlin', name: 'Berlin' },
                  {
                    id: 4,
                    value: 'london',
                    name: 'London',
                  },
                  {
                    id: 5,
                    value: 'kyiv',
                    name: 'Kyiv',
                  },
                  {
                    id: 6,
                    value: 'warszawa',
                    name: 'Warszawa',
                  },
                  {
                    id: 7,
                    value: 'moscow',
                    name: 'Moscow',
                  },
                ]}
              />
              {/* <img src={arrow} alt="arrow" /> */}
            </div>
            <Link
              type="a"
              props={{ href: 'tel:+80509379992' }}
              icon={phone}
              variant="accent"
            >
              +8 050 937 99 92
            </Link>
          </div>
          <div className={styles.Menu}>
            <div className={styles.MenuLink}>
              <Link
                type="a"
                props={{ href: 'tel:+80509379992' }}
                icon={phone}
                variant="accent"
              >
                +8 050 937 99 92
              </Link>
            </div>
            <button type="button" className={styles.Burger} onClick={openModal}>
              <img src={menu} alt="open menu" />
            </button>
            <Menu isOpen={isOpen} onClose={closeModal} />
            <div className={styles.Language}>
              <Select
                label={'Lang'}
                defaultValue={'Lang'}
                options={[
                  {
                    id: 1,
                    value: 'eng',
                    name: 'ENG',
                  },
                  { id: 2, value: 'es', name: 'ES' },
                  { id: 3, value: 'fr', name: 'FR' },
                  {
                    id: 4,
                    value: 'it',
                    name: 'IT',
                  },
                  {
                    id: 5,
                    value: 'ru',
                    name: 'RU',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <hr className={styles.Line} />
        <nav className={styles.HeaderBottom}>
          <div className={styles.LinkLeft}>
            <Link
              type="link"
              props={{
                to: URLS.MAIN,
                className: cn(styles.Link, {
                  [styles.LinkActive]: pathname === URLS.MAIN,
                }),
              }}
            >
              Shop
            </Link>
            <Link
              type="link"
              props={{
                to: URLS.ABOUT,
                className: cn(styles.Link, {
                  [styles.LinkActive]: pathname === URLS.ABOUT,
                }),
              }}
            >
              About me
            </Link>
          </div>
          <div className={styles.Link}>
            <Link type="link" props={{ to: URLS.CART }} icon={cart}>
              Cart
            </Link>
            {cartStore.cartItems.length > 0 ? (
              <div className={styles.Indicator}>
                {cartStore.cartItems.length}
              </div>
            ) : (
              ''
            )}
          </div>
        </nav>
      </header>
    </div>
  )
})
