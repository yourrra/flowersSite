import cn from 'classnames'
import { Link } from '../Link'
import { ImgHTMLAttributes } from 'react'
import * as URLS from '../../constants/urls'

import styles from './Logo.module.css'

import logo from '../../assets/Logo.svg'

type Props = {
  variant?: 'big' | 'small'
} & ImgHTMLAttributes<HTMLImageElement>

export const Logo = ({
  variant = 'big',
  className = '',
  ...htmlImageProps
}: Props) => {
  return (
    <Link type="link" props={{ to: URLS.MAIN }}>
      <img
        src={logo}
        className={cn(
          {
            [styles.isBig]: variant === 'big',
            [styles.isSmall]: variant === 'small',
          },
          className,
        )}
        {...htmlImageProps}
      />
    </Link>
  )
}
