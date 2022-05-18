import { useTranslation } from 'next-i18next'
import { Icon } from './Icon'

const config = [
  {
    name: 'Blockbeats',
    image: '/images/media-support/block_beats.svg',
    link: '',
  },
  {
    name: 'ChainCatcher',
    image: '/images/media-support/chain_catcher.svg',
    link: '',
  },
  {
    name: 'Foresight News',
    image: '/images/media-support/foresight_news.svg',
    link: '',
  },
  {
    name: 'PANEWS',
    image: '/images/media-support/panews.svg',
    link: '',
  },
  {
    name: 'ODaily News',
    image:
      '/images/media-support/odaily_news.png 1x, /images/media-support/odaily_news@2x.png 2x, /images/media-support/odaily_news@3x.png 3x',
    link: '',
  },
  {
    name: 'Tech Flow',
    image: '/images/media-support/tech_flow.svg',
    link: '',
  },
]

export const MediaSupport = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="flex flex-col gap-y-14 text-white">
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('media_support')}</h4>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 xl:grid-cols-6 xl:grid-rows-1 xl:gap-9">
        {config.map((x) => (
          <div key={x.name} className="inline-flex rounded-lg bg-support px-2 py-3 xl:px-7 xl:py-8">
            {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
          </div>
        ))}
      </div>
    </footer>
  )
}
