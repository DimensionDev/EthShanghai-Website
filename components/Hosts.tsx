import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const hostsConfig = (t: any) => [
  {
    name: t('host_zhixiong_pan'),
    description: t('host_zhixiong_pan_intro'),
    image:
      '/images/hosts/zhixiong_pan.png 1x, /images/hosts/zhixiong_pan@2x.png 2x, /images/hosts/zhixiong_pan@3x.png 3x',
  },
  {
    name: t('host_afra_wang'),
    description: t('host_afra_wang_intro'),
    image: '/images/hosts/afra_wang.png 1x, /images/hosts/afra_wang@2x.png 2x, /images/hosts/afra_wang@3x.png 3x',
  },
  {
    name: t('host_xiang_yao'),
    description: t('host_xiang_yao_intro'),
    image: '/images/hosts/xiang_yao.png 1x, /images/hosts/xiang_yao@2x.png 2x, /images/hosts/xiang_yao@3x.png 3x',
  },
  {
    name: t('host_hehe_shen'),
    description: t('host_hehe_shen_intro'),
    image: '/images/hosts/hehe_shen.png 1x, /images/hosts/hehe_shen@2x.png 2x, /images/hosts/hehe_shen@3x.png 3x',
  },
]

export const Hosts = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('hosts')} direction="reverse" />
      </div>
      <div className="mt-24 grid grid-cols-2 grid-rows-2 gap-4 xl:grid-cols-4 xl:grid-rows-1 xl:gap-9 xl:px-16">
        {hostsConfig(t).map((x) => (
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
