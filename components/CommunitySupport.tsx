import { useTranslation } from 'next-i18next'
import { Icon } from './Icon'

const config = [
  {
    name: 'NFTScan',
    image: '/images/community-support/nftscan.svg',
    link: '',
  },
  {
    name: 'Snap Finger DAO',
    image: '/images/community-support/snap_fingers_dao.svg',
    link: '',
  },
  {
    name: 'Blockbeats',
    image: '/images/media-support/block_beats.svg',
    link: '',
  },
  {
    name: 'DengLian',
    image: '/images/community-support/denglian.svg',
    link: '',
  },
  {
    name: 'YCatalyst',
    image: '/images/community-support/ycatalyst.svg',
    link: '',
  },
  {
    name: 'Moon Shot Factory',
    image: '/images/community-support/moon_shot_factory.svg',
    link: '',
  },
  {
    name: 'D/C',
    image:
      '/images/community-support/dc.png 1x, /images/community-support/dc@2x.png 2x, /images/community-support/dc@3x.png 3x',
    link: '',
  },
  {
    name: 'MetaJam',
    image:
      '/images/community-support/meta_jam.png 1x, /images/community-support/meta_jam@2x.png 2x, /images/community-support/meta_jam@3x.png 3x',
    link: '',
  },
  {
    name: 'Mole DAO',
    image:
      '/images/community-support/moledao.png 1x, /images/community-support/moledao@2x.png 2x, /images/community-support/moledao@3x.png 3x',
    link: '',
  },
]

export const CommunitySupport = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="flex flex-col gap-y-14 text-white">
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('community_support')}</h4>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 xl:grid-cols-5 xl:grid-rows-2">
          {config.map((x) => (
            <div key={x.name} className="inline-flex justify-center rounded-lg bg-support px-2 py-3 xl:px-7 xl:py-8">
              {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
