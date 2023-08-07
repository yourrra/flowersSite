import { Layout } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import { Picture } from '@/components/Picture'
import { TeamCard } from './components/TeamCard'

import tulip from '../../assets/tulip.jpg'
import Rose from '../../assets/Rose.jpg'
import Alina from '../../assets/Alina.jpg'
import Cris from '../../assets/Cris.jpg'
import Marina from '../../assets/Marina.jpg'
import Semyon from '../../assets/semyon.jpg'
import Frank from '../../assets/Frank.jpg'

import styles from './About.module.css'
import { Button } from '@/components/Button'

export function About() {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <section className={styles.AboutUs}>
          <Typography tag="h1" variant="h1" className={styles.Heading}>
            Who we are
          </Typography>
          <Typography tag="h2" variant="h2" className={styles.Description}>
            Flower shop Flowelove delivers flowers and gifts. We provide a wide
            range of products. Here you can always find roses of domestic
            production of various varieties, as well as such imported flowers
            as: chrysanthemums, tulips, gerberas, peonies, hydrangeas, irises
            and alstromerias.
          </Typography>
        </section>
        <section className={styles.History}>
          <Picture img={tulip} className={styles.Tulip} />
          <div className={styles.TextHistory}>
            <Typography tag="h2" variant="h2" className={styles.Title}>
              Our history
            </Typography>
            <div className={styles.Text}>
              <Typography variant="big" className={styles.HistoryDescription}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.{' '}
              </Typography>
              <hr className={styles.Line} />
              <Typography variant="big" className={styles.HistoryDescription}>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </Typography>
            </div>
          </div>
        </section>
        <section className={styles.Team}>
          <Typography tag="h2" variant="h2" className={styles.Title}>
            Our team
          </Typography>
          <div className={styles.CardWrapper}>
            <TeamCard name={'Rose Carina'} role={'Art Director'} img={Rose} />
            <TeamCard name={'Alina Carina'} role={'Art Director'} img={Alina} />
            <TeamCard name={'Cris Carina'} role={'Art Director'} img={Cris} />
            <TeamCard
              name={'Marina Carina'}
              role={'Art Director'}
              img={Marina}
            />
            <TeamCard
              name={'Semyon Carina'}
              role={'Art Director'}
              img={Semyon}
            />
            <TeamCard name={'Frank Carina'} role={'Art Director'} img={Frank} />
          </div>
        </section>
        <section className={styles.Result}>
          <div className={styles.WrapperResult}>
            <div>
              <Typography variant="label" className={styles.TextResult}>
                Active shops:
              </Typography>
              <Typography variant="h2-extra" className={styles.TextResult}>
                4,000+
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.TextResult}>
                Cities:
              </Typography>
              <Typography variant="h2-extra" className={styles.TextResult}>
                1,800+
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.TextResult}>
                Delivered Flowers:
              </Typography>
              <Typography variant="h2-extra" className={styles.TextResult}>
                950,100+
              </Typography>
            </div>
            <div>
              <Typography variant="label" className={styles.TextResult}>
                Customers pre year:
              </Typography>
              <Typography variant="h2-extra" className={styles.TextResult}>
                200,000+
              </Typography>
            </div>
          </div>
        </section>
        <section className={styles.TextWrapper}>
          <Typography variant="h2-extra" className={styles.TextBlock}>
            Our bouquets are of high quality and with proper care please the
            recipient for more than a week. A bouquet of beautiful flowers is
            relevant everywhere and always. Therefore, the flower shop BuketLand
            is ready to deliver the bouquet right now if you would like to
            please someone unusual and memorable to you.
          </Typography>
        </section>
        <section className={styles.Ending}>
          <Typography variant="special" className={styles.EndingText}>
            We deliver only freshly cut flowers.
          </Typography>
          <Button variant="red">GO TO SHOP</Button>
        </section>
      </div>
    </Layout>
  )
}
