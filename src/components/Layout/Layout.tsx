import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

import styles from './Layout.module.css'

type Props = {
  children: ReactNode
  header?: 'hidden' | ReactNode
  footer?: 'hidden' | ReactNode
}

export function Layout({ header, footer, children }: Props) {
  return (
    <div className={styles.Layout}>
      {header === 'hidden' ? null : header || <Header />}
      <main className={styles.Main}>{children}</main>
      {footer === 'hidden' ? null : footer || <Footer />}
    </div>
  )
}
