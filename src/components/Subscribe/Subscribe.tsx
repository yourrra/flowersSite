// import { type InputHTMLAttributes } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'

import styles from './Subscribe.module.css'

// type Props = {
//   placeholder?: string
// } & InputHTMLAttributes<HTMLInputElement>

export function Subscribe() {
  return (
    <div className={styles.Wrapper}>
      <Input placeholder={'E-mail'} />
      <Button>Subscribe</Button>
    </div>
  )
}

// export function Subscribe({
//     placeholder = 'E-mail',
//     ...htmlInputProps
//   }: Props) {
//     return (
//       <div className={styles.Wrapper}>
//         <form>
//           <input
//             type="text"
//             placeholder={placeholder}
//             className={styles.Input}
//             {...htmlInputProps}
//           />
//         </form>
//         <Button>Subscribe</Button>
//       </div>
//     )
//   }
