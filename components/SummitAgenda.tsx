import { useTranslation } from 'next-i18next'
import { HeaderSection } from './HeaderSection'

const agendaConfig = (t: (key: string) => string) => [
  {
    during: t('summit_time_am'),
    subTimes: [
      {
        during: '09:00 ~ 09:10',
        content: (
          <div>
            <p className="break-all">
              {t('agenda_opening_remarks')} –{' '}
              <span className="out-link inline-flex">{t('speaker_terry_edward_branstad')}</span>,{' '}
              {t('speaker_terry_edward_branstad_intro')}
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
              {t('agenda_keynote_speech')} –{' '}
              <span className="out-link inline-flex">{t('speaker_vitalik_buterin')}</span>,{' '}
              {t('speaker_vitalik_buterin_intro')}
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
              {t('agenda_keynote_speech')} – <span className="out-link inline-flex">{t('speaker_tin_pei_ling')}</span>,{' '}
              {t('speaker_tin_pei_ling_intro')}
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
              CEO Fireside Chat – <span className="out-link inline-flex">{t('speaker_wu_xiao')}</span>
            </p>
            <p>{t('speaker_wu_xiao_intro')}</p>
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
    during: t('summit_time_pm'),
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
              {t('agenda_keynote_speech')} –{' '}
              <span className="out-link inline-flex">{t('speaker_illia_polosukhin')}</span>,{' '}
              {t('speaker_illia_polosukhin_intro')}
            </p>
            <p>
              <b>{t('agenda_day1_6')}</b>
            </p>
            <p className="mt-2">{t('agenda_roundtable_discussion')}</p>
            <p>
              <b>{t('agenda_day1_7')}</b>
            </p>
          </div>
        ),
      },
      {
        during: '14:30 ~ 15:30',
        content: (
          <div>
            <p className="mb-3">{t('agenda_host')}</p>
            <p className="mb-4">
              <span className="out-link inline-flex">Xiang Yao</span>
            </p>
            <p className="mb-4">{t('agenda_guests')}</p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_ling_zhang')}</span> , {t('speaker_ling_zhang_intro')}
            </p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_zhe_sun')}</span>, {t('speaker_ling_zhang_intro')}
            </p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_jin_hai_luo')}</span>, {t('speaker_jin_hai_luo_intro')}
            </p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_qidong_sun')}</span>, {t('speaker_qidong_sun_intro')}
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
    during: t('summit_time_night'),
    subTimes: [
      {
        during: '20:00 ~ 20:30',
        content: (
          <div>
            <p>
              CEO Fireside Chat – <span className="out-link inline-flex">{t('speaker_joseph_lubin')}</span>,{' '}
              {t('speaker_joseph_lubin_intro')}
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
              {t('agenda_keynote_speech')} – <span className="out-link inline-flex">{t('speaker_sam_williams')}</span>,
              {t('speaker_sam_williams_intro')}
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
              <span className="out-link inline-flex">{t('speaker_sandeep_nailwal')}</span>,{' '}
              {t('speaker_sandeep_nailwal_intro')}
            </p>
            <p>
              {t('speaker_dalip_tyagi')}, {t('speaker_dalip_tyagi_intro')}
            </p>
          </div>
        ),
      },
      {
        during: '21:30 ~ 22:30',
        content: (
          <div>
            <p>{t('agenda_roundtable_discussion')}</p>
            <p className="mb-4">
              <b>{t('agenda_day1_10')}</b>
            </p>
            <p className="mb-2">{t('agenda_host')}</p>
            <p className="mb-6">
              <span className="out-link inline-flex">Afra Wang</span>
            </p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_nathan_schneider')}</span> ,{' '}
              {t('speaker_nathan_schneider_intro')}
            </p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_chen_qiufan')}</span>, {t('speaker_chen_qiufan_intro')}
            </p>
            <p className="mb-2">
              <span className="out-link inline-flex">{t('speaker_wang_yang')}</span>, {t('speaker_wang_yang_intro')}
            </p>
          </div>
        ),
      },
      {
        during: '22:30 ~ 23:00',
        content: (
          <div>
            <p>
              {t('agenda_keynote_speech')} - <span className="out-link inline-flex">{t('speaker_suji_yan')}</span> ,{' '}
              {t('speaker_suji_yan_intro')}
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
            <h4 className="mb-9 text-2xl font-bold xl:text-4xl">{x.during}</h4>
            <div className="flex flex-col gap-y-8">
              {x.subTimes.map((t) => (
                <div
                  key={t.during}
                  className="flex flex-col gap-4 bg-footer p-6 xl:flex-row xl:gap-x-12 xl:bg-transparent xl:p-0">
                  <div className="flex-shrink-0 flex-grow-0 text-left font-bold xl:w-1/3 xl:text-right">
                    <time className="inline-flex text-time">{t.during}</time>
                  </div>
                  <div className={'flex-1 break-all'}>{t.content}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
