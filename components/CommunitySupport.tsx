import { useTranslation } from 'next-i18next'
import { Icon } from './Icon'

const config = [
  {
    name: 'TinTin',
    image:
      '/images/community-support/tintin.png 1x, /images/community-support/tintin@2x.png 2x, /images/community-support/tintin@3x.png 3x',
    link: 'https://twitter.com/Tintinland2021',
  },
  {
    name: 'NFTScan',
    image: '/images/community-support/nftscan.svg',
    link: 'https://www.nftscan.com/',
  },
  {
    name: 'Snap Finger DAO',
    image: '/images/community-support/snap_fingers_dao.svg',
    link: 'https://snapfingers.com/',
  },
  // {
  //   name: 'Blockbeats',
  //   image: '/images/media-support/block_beats.svg',
  //   link: 'https://www.theblockbeats.info/',
  // },
  {
    name: 'DengLian',
    image: '/images/community-support/denglian.svg',
    link: 'https://learnblockchain.cn/',
  },
  {
    name: 'YCatalyst',
    image: '/images/community-support/ycatalyst.svg',
    link: '#',
  },
  {
    name: 'Moon Shot Factory',
    image: '/images/community-support/moon_shot_factory.svg',
    link: '#',
  },
  {
    name: 'Decode',
    image:
      '/images/community-support/dc.png 1x, /images/community-support/dc@2x.png 2x, /images/community-support/dc@3x.png 3x',
    link: 'https://www.decode.build/',
  },
  {
    name: 'MetaJam',
    image:
      '/images/community-support/meta_jam.png 1x, /images/community-support/meta_jam@2x.png 2x, /images/community-support/meta_jam@3x.png 3x',
    link: 'https://www.metajam.studio/',
  },
  {
    name: 'Mole DAO',
    image:
      '/images/community-support/moledao.png 1x, /images/community-support/moledao@2x.png 2x, /images/community-support/moledao@3x.png 3x',
    link: 'https://moledao.io/#/home',
  },
  {
    name: 'Genki',
    image:
      '/images/community-support/genki.png 1x, /images/community-support/genki@2x.png 2x, /images/community-support/genki@3x.png 3x',
    link: null,
  },
  {
    name: 'SeeDao',
    image:
      '/images/community-support/seedao.png 1x, /images/community-support/seedao@2x.png 2x, /images/community-support/seedao@3x.png 3x',
    link: null,
  },
  {
    name: 'ShowMe',
    image:
      '/images/community-support/showme.png 1x, /images/community-support/showme@2x.png 2x, /images/community-support/showme@3x.png 3x',
    link: null,
  },
  {
    name: 'DeepLearning',
    image:
      '/images/community-support/deep_learning.png 1x, /images/community-support/deep_learning@2x.png 2x, /images/community-support/deep_learning@3x.png 3x',
    link: null,
  },
  {
    name: '427318916',
    image:
      '/images/community-support/427318916.png 1x, /images/community-support/427318916@2x.png 2x, /images/community-support/427318916@3x.png 3x',
    link: null,
  },
  {
    name: 'rebase',
    image:
      '/images/community-support/rebase.png 1x, /images/community-support/rebase@2x.png 2x, /images/community-support/rebase@3x.png 3x',
    link: null,
  },
  {
    name: 'Atem',
    image:
      '/images/community-support/atem.png 1x, /images/community-support/atem@2x.png 2x, /images/community-support/atem@3x.png 3x',
    link: null,
  },
  {
    name: 'Web3 Revolution',
    image:
      '/images/community-support/web3.png 1x, /images/community-support/web3@2x.png 2x, /images/community-support/web3@3x.png 3x',
    link: null,
  },
  {
    name: 'ETHPlanet',
    image: '/images/community-support/ethplanet.svg',
    link: 'https://www.ethplanet.org/',
  },
  {
    name: '原语里弄',
    image: '/images/community-support/yuanyu.svg',
    link: 'https://www.primitiveslane.org/',
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
            <a
              href={x.link ?? undefined}
              target={x.link ? '_blank' : undefined}
              key={x.name}
              className="inline-flex h-28 justify-center rounded-lg bg-support px-2 py-3 xl:h-32 xl:px-7 xl:py-8">
              {x.image.includes('.svg') ? (
                <img src={x.image} alt={x.name} />
              ) : (
                <img srcSet={x.image} src={x.image.split(' 1x')[0]} alt={x.name} />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
