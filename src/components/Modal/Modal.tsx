import { FC, PropsWithChildren, useState } from 'react'
import { Portal } from '../Portal'
import cn from 'classnames'

import styles from './Modal.module.css'

type Props = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
}>

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  const [closing, setClosing] = useState(false)
  if (!isOpen) return null

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      onClose()
      setClosing(false)
    }, 280)
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
          <div className={styles.WrapperContent}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
