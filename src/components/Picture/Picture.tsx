import { type ImgHTMLAttributes, memo, forwardRef } from 'react'

type Props = {
  img: string
} & ImgHTMLAttributes<HTMLImageElement>

export const Picture = memo(
  forwardRef<HTMLImageElement, Props>(
    ({ img, className = '', ...htmlImageElement }, ref) => {
      return (
        <picture>
          <source type="image/avif" srcSet={`${img.slice(0, -4)}.avif`} />
          <source type="image/webp" srcSet={`${img.slice(0, -4)}.webp`} />
          <img
            className={className}
            src={img}
            alt={img}
            {...htmlImageElement}
            ref={ref}
          />
        </picture>
      )
    },
  ),
)
