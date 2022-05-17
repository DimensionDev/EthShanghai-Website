import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const hostsConfig = [
  {
    name: 'Zhixiong Pan',
    description: 'Co-Founder of ChainFeeds',
    image: '/images/hosts/zhixiong_pan.svg',
  },
  {
    name: 'Afra Wang',
    description: 'Web3 Revolution Podcast Host',
    image: '/images/hosts/afra_wang.svg',
  },
  {
    name: 'Xiang Yao',
    description: 'Founder of Primitives Lane',
    image: '/images/hosts/xiang_yao.svg',
  },
  {
    name: 'Hehe Shen',
    description: 'Head of Global Growth at Mask Network',
    image: '/images/hosts/hehe_shen.svg',
  },
]

export const Hosts = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('hosts')} />
      </div>
      <div className="mt-24 grid grid-cols-2 grid-rows-2 gap-9 xl:grid-cols-4 xl:grid-rows-1 xl:px-16">
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
