import { Link } from '../Link'
import * as URLS from '../../constants/urls'

import phone from '../../assets/phone.svg'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import cart from '../../assets/cart.svg'
import arrow from '../../assets/arrow-bl.svg'
import map from '../../assets/map.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.Wrapper}>
      <header className={styles.Header}>
        <div className={styles.HeaderTop}>
          <img src={logo} alt="logo" />
          <div className={styles.Delivery}>
            <div className={styles.City}>
              <img src={map} alt="map" />
              <div>
                Send flowers to <span className={styles.Rome}>Rome</span>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
            <Link
              type="a"
              props={{ href: 'tel:++80509379992' }}
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
                props={{ href: 'tel:++80509379992' }}
                icon={phone}
                variant="accent"
              >
                +8 050 937 99 92
              </Link>
            </div>
            <button className={styles.Burger}>
              <img src={menu} alt="menu" />
            </button>
            <div className={styles.Language}>
              <div>ENG</div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className={styles.HeaderBottom}>
          <div className={styles.LinkLeft}>
            <Link type="link" props={{ to: URLS.MAIN }}>
              Shop
            </Link>
            <Link type="link" props={{ to: URLS.ABOUT }}>
              About me
            </Link>
          </div>
          <div>
            <Link type="link" props={{ to: URLS.CART }} icon={cart}>
              Cart
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
