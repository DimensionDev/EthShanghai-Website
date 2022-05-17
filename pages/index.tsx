import type { NextPage } from 'next'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Banner } from '../components/Banner'
import { useTranslation } from 'next-i18next'
import { ActivitySection } from '../components/ActivitySection'
import { ReactNode } from 'react'
import { SummitAgenda } from '../components/SummitAgenda'
import { Footer } from '../components/Footer'
import { Speakers } from '../components/Speakers'
import { Hosts } from '../components/Hosts'

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  const activities = [
    {
      title: <h3 className="header-section inline-flex text-5xl font-bold text-white">{t('activity_summit')}</h3>,
      illustration: (
        <div>
          <Image src={'/images/activity_summit.svg'} width={390} height={320} layout={'fixed'} />
        </div>
      ),
      direction: 'right-to-left',
      content: (
        <div className="flex flex-col gap-y-6">
          <p className="first-letter text-lg text-white">{t('activity_summit_p_1')}</p>
          <p className="text-lg text-white">{t('activity_summit_p_2')}</p>
          <p className="text-lg text-white">{t('activity_summit_p_3')}</p>
        </div>
      ),
    },
    {
      title: (
        <h3 className="header-section-reverse inline-flex text-5xl font-bold text-white">{t('activity_hackathon')}</h3>
      ),
      illustration: (
        <div>
          <Image src={'/images/activity_hackathon.svg'} width={390} height={320} layout={'fixed'} />
        </div>
      ),
      direction: 'left-to-right',
      content: (
        <div className="flex flex-col gap-y-6">
          <p className="first-letter text-lg text-white">{t('activity_hackathon_p_1')}</p>
          <p className="text-lg text-white">{t('activity_hackathon_p_2')}</p>
          <p className="text-lg text-white">{t('activity_hackathon_p_3')}</p>
        </div>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-main">
      <header>
        <Navigation />
      </header>
      <div>
        <Banner />
      </div>
      <main className="container m-auto p-8">
        <section className="flex flex-col gap-y-24">
          {activities.map((x, index) => (
            <ActivitySection key={index} title={x.title} illustration={x.illustration} direction={x.direction as any}>
              {x.content}
            </ActivitySection>
          ))}
        </section>
        <section className="mt-28">
          <SummitAgenda />
        </section>
        <section className="mt-28">
          <Speakers />
        </section>
        <section className="mt-28">
          <Hosts />
        </section>
      </main>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})

export default Home
