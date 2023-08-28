import { Logo } from '@/components/Logo'
import { Link } from '@/components/Link'
import { Typography } from '@/components/Typography'
import * as URLS from '../../constants/urls'

import phone from '../../assets/phone.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import whatsAap from '../../assets/whatsAap.svg'

import styles from './Footer.module.css'
import { Subscribe } from '@/components/Subscribe'

export const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <footer className={styles.Footer}>
        <div className={styles.Info}>
          <Logo className={styles.Logo} />
          <Link
            type="a"
            props={{ href: 'tel:+80509379992', className: styles.Number }}
            icon={phone}
            variant="accent"
          >
            +8 050 937 99 92
          </Link>
          <Typography tag="p" variant="normal" className={styles.Logo}>
            Feel free to contact us on your queries and we will get back to you
            as soon as possible!
          </Typography>
          <div className={styles.Social}>
            <Link
              type="a"
              props={{ href: 'https://facebook.com/' }}
              icon={facebook}
            />
            <Link
              type="a"
              props={{
                href: 'https://twitter.com/',
              }}
              icon={twitter}
            />
            <Link
              type="a"
              props={{ href: 'https://www.whatsapp.com/' }}
              icon={whatsAap}
            />
          </div>
        </div>
        <div className={styles.Categories}>
          <Typography tag="h3" variant="h3" className={styles.Title}>
            Categories
          </Typography>
          <ul className={styles.Links}>
            <li>
              <Link type="link" props={{ to: '/flowers' }}>
                Flowers
              </Link>
            </li>
            <li>
              <Link type="link" props={{ to: '/Gifts' }}>
                Gifts
              </Link>
            </li>
            <li>
              <Link type="link" props={{ to: '/Roses' }}>
                Roses
              </Link>
            </li>
            <li>
              <Link type="link" props={{ to: '/Occasion' }}>
                Occasion
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.Info}>
          <Typography tag="h3" variant="h3" className={styles.Title}>
            Information
          </Typography>
          <nav>
            <ul className={styles.Links}>
              <li>
                <Link type="link" props={{ to: URLS.MAIN }}>
                  Shop
                </Link>
              </li>
              <li>
                <Link type="link" props={{ to: URLS.ABOUT }}>
                  About us
                </Link>
              </li>
              <li>
                <Link type="link" props={{ to: URLS.CART }}>
                  Payment
                </Link>
              </li>
              <li>
                <Link type="link" props={{ to: URLS.ORDER }}>
                  Shiping
                </Link>
              </li>
              <li>
                <Link type="link" props={{ to: URLS.ABOUT }}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Typography tag="h3" variant="h3" className={styles.Title}>
            Subscribe us!
          </Typography>
          <Typography tag="p" variant="normal" className={styles.Title}>
            In an effort to worthily lead a person on his last journey,
            relatives, friends and colleagues present him with flowers.
          </Typography>
          <Subscribe id={'1c'} />
        </div>
      </footer>
    </div>
  )
}
