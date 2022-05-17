import { useTranslation } from 'next-i18next'
import { HeaderSection } from './HeaderSection'

const agendaConfig = (t: (key: string) => string) => [
  {
    during: 'May 20, 2022 AM (GMT+8)',
    subTimes: [
      {
        during: '09:00 ~ 09:10',
        content: (
          <div>
            <p>
              {t('agenda_opening_remarks')} – <span className="out-link inline-flex">Terry Branstad</span>, Former U.S.
              Ambassador to China
            </p>
            <p>
              <b>{t('agenda_day1_1')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '09:10 ~ 09:30',
        content: (
          <div>
            <p>{t('agenda_ambassador_q_and_a')}</p>
            <p>
              <b>{t('agenda_day1_2')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '09:30 ~ 10:00',
        content: (
          <div>
            <p>
              {t('agenda_keynote_speech')} – <span className="out-link inline-flex">Vitalik Buterin</span>, Co-founder
              of Ethereum
            </p>
            <p>
              <b>{t('agenda_day1_3')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '10:00 ~ 10:20',
        content: (
          <div>
            <p>{t('agenda_keynote_speech_hackathon_kickoff')}</p>
          </div>
        ),
      },
      {
        during: '10:20 ~ 10:40',
        content: (
          <div>
            <p>{t('agenda_break')}</p>
          </div>
        ),
      },
      {
        during: '10:40 ~ 11:10',
        content: (
          <div>
            <p>
              {t('agenda_keynote_speech')} – <span className="out-link inline-flex">Tin Pei Ling</span>, CEO of Business
              China
            </p>
            <p>
              <b>{t('agenda_day1_4')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '11:10 ~ 11:40',
        content: (
          <div>
            <p>{t('agenda_to_be_announced')}</p>
          </div>
        ),
      },
      {
        during: '11:40 ~ 12:00',
        content: (
          <div>
            <p>
              CEO Fireside Chat – <span className="out-link inline-flex">Wu Xiao</span>
            </p>
            <p>CEO of White Matrix, Founder of ChainIDE</p>
          </div>
        ),
      },
      {
        during: '12:30 ~ 13:30',
        content: (
          <div>
            <p>{t('agenda_break')}</p>
          </div>
        ),
      },
    ],
  },
  {
    during: 'May 20, 2022 PM (GMT+8)',
    subTimes: [
      {
        during: '13:30 ~ 14:00',
        content: (
          <div>
            <p>{t('agenda_day1_5')}</p>
            <p>
              <span className="out-link inline-flex">Bob Jiang</span> , GitcoinDAO Steward
            </p>
          </div>
        ),
      },
      {
        during: '14:00 ~ 14:30',
        content: (
          <div>
            <p>
              {t('agenda_keynote_speech')} – <span className="out-link inline-flex">Illia Polosukhin</span>, Co-founder
              of NEAR
            </p>
            <p>
              <b>{t('agenda_day1_6')}</b>
            </p>
            <p className="mt-2">{t('agenda_roundtable_discussion')}</p>
            <p>
              <b>{t('agenda_day1_7')}</b>
            </p>
            <p>{t('agenda_host')}</p>
            <p>
              <span className="out-link inline-flex">Xiang Yao</span>
            </p>
          </div>
        ),
      },
      {
        during: '14:30 ~ 15:30',
        content: (
          <div>
            <p>{t('agenda_guests')}</p>
            <p>
              <span className="out-link inline-flex">Ling Zhang</span> , Managing Partner at Old Fashion Research
            </p>
            <p>
              <span className="out-link inline-flex">Zhe Sun</span>, Shanghai University of Finance and Economics
            </p>
            <p>
              <span className="out-link inline-flex">Jinhai Luo</span>, Founder of Quantum School
            </p>
            <p>
              <span className="out-link inline-flex">Qidong Sun</span>, Art Director of MadeIn
            </p>
          </div>
        ),
      },
      {
        during: '15:30 ~ 16:30',
        content: (
          <div>
            <p>{t('agenda_developer_forum')}</p>
          </div>
        ),
      },
    ],
  },
  {
    during: 'May 20, 2022 Night (GMT+8)',
    subTimes: [
      {
        during: '20:00 ~ 20:30',
        content: (
          <div>
            <p>
              CEO Fireside Chat – <span className="out-link inline-flex">Joseph Lubin</span>, Founder & CEO of ConsenSys
            </p>
            <p>
              <b>{t('agenda_day1_8')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '20:30 ~ 21:00',
        content: (
          <div>
            <p>
              {t('agenda_keynote_speech')} – <span className="out-link inline-flex">Sam Williams</span>, Co-founder and
              CEO of Arweave
            </p>
            <p>
              <b>{t('agenda_day1_9')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '21:00 ~ 21:30',
        content: (
          <div>
            <p>Polygon Fireside Chat</p>
            <p>
              <span className="out-link inline-flex">Sandeep Nailwal</span>, Co-founder of Polygon Technology
            </p>
            <p>Dalip Tyagi, SVP and Head of Developer Relations of Polygon Technology</p>
          </div>
        ),
      },
      {
        during: '21:30 ~ 22:30',
        content: (
          <div>
            <p>{t('agenda_roundtable_discussion')}</p>
            <p>
              <b>{t('agenda_day1_10')}</b>
            </p>
            <p>{t('agenda_host')}</p>
            <p>
              <span className="out-link inline-flex">Afra Wang</span>
            </p>
            <p>
              <span className="out-link inline-flex">Ling Zhang</span> , Managing Partner at Old Fashion Research
            </p>
            <p>
              <span className="out-link inline-flex">Zhe Sun</span>, Shanghai University of Finance and Economics
            </p>
            <p>
              <span className="out-link inline-flex">Jinhai Luo</span>, Founder of Quantum School
            </p>
            <p>
              <span className="out-link inline-flex">Qidong Sun</span>, Art Director of MadeIn
            </p>
          </div>
        ),
      },
      {
        during: '22:30 ~ 23:00',
        content: (
          <div>
            <p>
              {t('agenda_keynote_speech')} - <span className="out-link inline-flex">Suji Yan</span> , , Founder of Mask
              Network
            </p>
          </div>
        ),
      },
      {
        during: '23:00 ~ 23:10',
        content: (
          <div>
            <p>{t('agenda_closing_ceremony')}</p>
          </div>
        ),
      },
    ],
  },
]

export const SummitAgenda = () => {
  const { t } = useTranslation('common')
  return (
    <div id="summit-agenda" className="flex flex-col gap-y-20 px-0 text-white xl:px-28">
      <HeaderSection content={t('summit_agenda')} />
      <div className="flex flex-col gap-y-16">
        {agendaConfig(t).map((x) => (
          <div key={x.during}>
            <h4 className="mb-9 text-4xl font-bold">{x.during}</h4>
            <div className="flex flex-col gap-y-8">
              {x.subTimes.map((t) => (
                <div key={t.during} className="flex gap-x-12">
                  <div className="w-1/3 text-right">
                    <time className="text-time">{t.during}</time>
                  </div>
                  <div>{t.content}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
