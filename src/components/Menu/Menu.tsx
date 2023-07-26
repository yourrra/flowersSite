import { Portal } from '@components/Portal'
import { Link } from '@components/Link'
import * as URLS from '../../constants/urls'
import cn from 'classnames'

import arrow from '../../assets/arrow-bl.svg'
import close from '../../assets/close.svg'

import styles from './Menu.module.css'
import { useState } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Menu = ({ isOpen, onClose }: Props) => {
  const [closing, setClosing] = useState(false)
  if (!isOpen) return null

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      onClose()
      setClosing(false)
    }, 290)
  }

  return (
    <Portal isOpen={isOpen}>
      <div
        className={cn({
          [styles.Overlay]: isOpen,
          [styles.OverlayClose]: closing,
        })}
        onClick={handleClose}
      >
        <div
          className={cn({
            [styles.Content]: isOpen,
            [styles.ContentClose]: closing,
          })}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.Wrapper}>
            <div className={styles.ButtonWrapper}>
              <button
                className={styles.Button}
                type="button"
                onClick={handleClose}
              >
                <img src={close} alt="close menu" />
              </button>
            </div>
            <nav>
              <ul className={styles.Links}>
                <li className={styles.Link}>
                  <Link type="link" props={{ to: URLS.MAIN }}>
                    Shop
                  </Link>
                </li>
                <li className={styles.Link}>
                  <Link type="link" props={{ to: URLS.ABOUT }}>
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.Language}>
              <div>ENG</div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}
