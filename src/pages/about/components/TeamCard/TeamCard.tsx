import { Picture } from '@/components/Picture'
import { Typography } from '@/components/Typography'

import styles from './TeamCard.module.css'

type Props = {
  name: string
  role: string
  img: string
}

export const TeamCard = ({ name, role, img }: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Picture img={img} alt={name} className={styles.Img} />
      <div className={styles.Text}>
        <Typography variant="normal" className={styles.Name}>
          {name}
        </Typography>
        <Typography variant="label" className={styles.Role}>
          {role}
        </Typography>
      </div>
    </div>
  )
}
