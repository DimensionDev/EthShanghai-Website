import { useTranslation } from 'next-i18next'
import { Icon } from './Icon'

const config = [
  '/images/community-support/nftscan.svg',
  '/images/community-support/snap_fingers_dao.svg',
  '/images/community-support/denglian.svg',
  '/images/community-support/ycatalyst.svg',
  '/images/community-support/moon_shot_factory.svg',
  '/images/community-support/dc.svg',
  '/images/community-support/meta_jam.svg',
  '/images/community-support/moledao.svg',
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
            <div className="inline-flex justify-center rounded-lg bg-support px-2 py-3 xl:px-7 xl:py-8">
              <img src={x} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
