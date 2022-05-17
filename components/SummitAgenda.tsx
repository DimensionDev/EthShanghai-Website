import { useTranslation } from 'next-i18next'
import { HeaderSection } from './HeaderSection'

const agendaConfig = [
  {
    during: 'May 20, 2022 AM (GMT+8)',
    subTimes: [
      {
        during: '09:00 ~ 09:10',
        content: (
          <div>
            <p>
              Opening Remarks –
              <a href="#" className="out-link">
                Terry Branstad
              </a>
              , Former U.S. Ambassador to China
            </p>
            <p>
              <b>"Global Collaboration on Standardizing Web 3.0"</b>
            </p>
          </div>
        ),
      },
      {
        during: '09:10 ~ 09:30',
        content: (
          <div>
            <p>Ambassador Q&A</p>
            <p>
              <b>"Q&A On China-US Relationship in The Next Decade"</b>
            </p>
          </div>
        ),
      },
      {
        during: '09:30 ~ 10:00',
        content: (
          <div>
            <p>
              Keynote Speech –
              <a href="#" className="out-link">
                Vitalik Buterin
              </a>
              , Co-founder of Ethereum
            </p>
            <p>
              <b>"ETH & Shanghai and Beyond Shanghai"</b>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    during: 'May 20, 2022 PM (GMT+8)',
    subTimes: [
      {
        during: '01:30 ~ 02:00',
        content: (
          <div>
            <p>GitcoinDAO: Past and Future</p>
            <p>
              <a href="#" className="out-link">
                Bob Jiang
              </a>
              , GitcoinDAO Steward
            </p>
          </div>
        ),
      },
    ],
  },
  {
    during: 'May 20, 2022 Night (GMT+8)',
    subTimes: [
      {
        during: '08:00 ~ 08:30',
        content: (
          <div>
            <p>GitcoinDAO: Past and Future</p>
            <p>
              <a href="#" className="out-link">
                Bob Jiang
              </a>
              , GitcoinDAO Steward
            </p>
          </div>
        ),
      },
    ],
  },
]

export const SummitAgenda = () => {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col gap-y-20 px-28 text-white">
      <HeaderSection content={t('summit_agenda')} />
      <div className="flex flex-col gap-y-16">
        {agendaConfig.map((x) => (
          <div key={x.during}>
            <h4 className="mb-9 text-4xl font-bold">{x.during}</h4>
            <div className="flex flex-col gap-y-8">
              {x.subTimes.map((t) => (
                <div key={t.during} className="flex gap-x-12">
                  <div className="w-1/3 text-right">
                    <time>{t.during}</time>
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
