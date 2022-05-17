import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const hostsConfig = [
  {
    name: 'Zhixiong Pan',
    description: 'Co-Founder of ChainFeeds',
    image:
      '/images/hosts/zhixiong_pan.png 1x, /images/hosts/zhixiong_pan@2x.png 2x, /images/hosts/zhixiong_pan@3x.png 3x',
  },
  {
    name: 'Afra Wang',
    description: 'Web3 Revolution Podcast Host',
    image: '/images/hosts/afra_wang.png 1x, /images/hosts/afra_wang@2x.png 2x, /images/hosts/afra_wang@3x.png 3x',
  },
  {
    name: 'Xiang Yao',
    description: 'Founder of Primitives Lane',
    image: '/images/hosts/xiang_yao.png 1x, /images/hosts/xiang_yao@2x.png 2x, /images/hosts/xiang_yao@3x.png 3x',
  },
  {
    name: 'Hehe Shen',
    description: 'Head of Global Growth at Mask Network',
    image: '/images/hosts/hehe_shen.png 1x, /images/hosts/hehe_shen@2x.png 2x, /images/hosts/hehe_shen@3x.png 3x',
  },
]

export const Hosts = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('hosts')} />
      </div>
      <div className="mt-24 grid grid-cols-2 grid-rows-2 gap-6 xl:grid-cols-4 xl:grid-rows-1 xl:gap-9 xl:px-16">
        {hostsConfig.map((x) => (
          <HumanCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'speaker'}
            width={290}
            height={339}
          />
        ))}
      </div>
    </div>
  )
}
