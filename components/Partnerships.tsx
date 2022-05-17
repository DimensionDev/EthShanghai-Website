import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { PartnerCard } from './PartnerCard'

const partner1 = [
  {
    name: 'Mask',
    description: 'Host',
    image: '/images/partnerships/mask.svg',
  },
  {
    name: 'CBCGDF',
    description: 'Co-organizers',
    image: '/images/partnerships/cbcgdf.svg',
  },
  {
    name: 'Business China',
    description: 'Co-organizers',
    image: '/images/partnerships/business_china.svg',
  },
  {
    name: 'Ethereum Foundation',
    description: 'Co-organizers',
    image: '/images/partnerships/ethereum_foundation.svg',
  },
]

const partner2 = [
  {
    name: 'ChainIDE',
    description: 'Lead Sponsor',
    image: '/images/partnerships/chain_ide.svg',
  },
  {
    name: 'Mecha Morphing',
    description: 'Co-Sponsor',
    image: '/images/partnerships/mecha_morphing.svg',
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
        {partner1.map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'partner'}
            width={290}
            height={339}
          />
        ))}
        <div></div>
        {partner2.map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'partner'}
            width={320}
            height={339}
          />
        ))}
        <div></div>
      </div>
      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-7 xl:hidden">
        {partner1.map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'partner'}
            width={290}
            height={339}
          />
        ))}
        {partner2.map((x) => (
          <PartnerCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'partner'}
            width={320}
            height={339}
          />
        ))}
      </div>
    </div>
  )
}
