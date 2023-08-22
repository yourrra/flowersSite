import { Layout } from '@/components/Layout'
import { AboutUs } from './components/AboutUs'
import { Description } from './components/Description'
import { Ending } from './components/Ending'
import { History } from './components/History'
import { Result } from './components/Result'
import { Team } from './components/Team'

import styles from './About.module.css'

export function About() {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <AboutUs />
        <History />
        <Team />
        <Result />
        <Description />
        <Ending />
      </div>
    </Layout>
  )
}
