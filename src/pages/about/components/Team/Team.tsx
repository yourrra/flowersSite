import { Typography } from '@/components/Typography'
import { TeamCard } from '../TeamCard'

import styles from './Team.module.css'

import Rose from '../../../../assets/Rose.jpg'
import Alina from '../../../../assets/Alina.jpg'
import Cris from '../../../../assets/Cris.jpg'
import Marina from '../../../../assets/Marina.jpg'
import Semyon from '../../../../assets/semyon.jpg'
import Frank from '../../../../assets/Frank.jpg'

export const Team = () => {
  return (
    <section className={styles.Team}>
      <Typography tag="h2" variant="h2" className={styles.Title}>
        Our team
      </Typography>
      <div className={styles.CardWrapper}>
        <TeamCard name={'Rose Carina'} role={'Art Director'} img={Rose} />
        <TeamCard name={'Alina Carina'} role={'Art Director'} img={Alina} />
        <TeamCard name={'Cris Carina'} role={'Art Director'} img={Cris} />
        <TeamCard name={'Marina Carina'} role={'Art Director'} img={Marina} />
        <TeamCard name={'Semyon Carina'} role={'Art Director'} img={Semyon} />
        <TeamCard name={'Frank Carina'} role={'Art Director'} img={Frank} />
      </div>
    </section>
  )
}
