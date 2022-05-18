import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { PartnerCard } from './PartnerCard'

const partner1 = (t: any) => [
  {
    name: 'Mask Network',
    description: t('host'),
    image: '/images/partnerships/mask.svg',
    link: 'https://mask.io',
  },
  {
    name: 'CBCGDF',
    description: t('co_organizers'),
    image: `/images/partnerships/cbcgdf.png 1x,
            /images/partnerships/cbcgdf@2x.png 2x,
            /images/partnerships/cbcgdf@3x.png 3x
    `,
    link: 'http://www.cbcgdf.org/',
  },
  {
    name: 'Business China',
    description: t('co_organizers'),
    image: `/images/partnerships/business_china.png 1x,
            /images/partnerships/business_china@2x.png 2x,
            /images/partnerships/business_china@3x.png 3x
    `,
    link: 'https://www.businesschina.org.sg/en/',
  },
  {
    name: 'Ethereum Foundation',
    description: t('co_organizers'),
    image: '/images/partnerships/ethereum_foundation.svg',
    link: 'https://ethereum.org/en/',
  },
]

const partner2 = (t: any) => [
  {
    name: 'ChainIDE',
    description: t('lead_sponsor'),
    image: '/images/partnerships/chain_ide.svg',
    link: 'https://chainide.com/',
  },
  {
    name: 'Mecha Morphing',
    description: t('co_sponsor'),
    image: `/images/partnerships/mecha_morphing.png 1x,
            /images/partnerships/mecha_morphing@2x.png 2x,
            /images/partnerships/mecha_morphing@3x.png 3x
    `,
    link: 'https://www.mechamorphing.com/',
  },
]

export const Partnerships = () => {
  const { t } = useTranslation('common')

  return (
    <div id="partnerships">
      <div className="mb-20">
        <HeaderSection content={t('partnerships')} />
      </div>
      <div className="mt-16 grid hidden grid-cols-4 grid-rows-2 gap-7 px-16 xl:grid">
        {partner1(t).map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'bg-partner'}
            link={x.link}
          />
        ))}
        <div></div>
        {partner2(t).map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'bg-partner'}
            link={x.link}
          />
        ))}
        <div></div>
      </div>
      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-4 xl:hidden">
        {partner1(t).map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'bg-partner'}
            link={x.link}
          />
        ))}
        {partner2(t).map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'bg-partner'}
            link={x.link}
          />
        ))}
      </div>
    </div>
  )
}
