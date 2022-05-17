import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const speakerMasters = [
  {
    name: 'Terry Edward Branstad',
    description: 'Former U.S. Ambassador to China (2017-2020)',
    image: '/images/speakers/terry_edward_branstad.svg',
  },
  {
    name: 'Tin Pei Ling',
    description: 'CEO of Business China',
    image: '/images/speakers/terry_edward_branstad.svg',
  },
  {
    name: 'Vitalik Buterin',
    description: 'Co-founder of Ethereum',
    image: '/images/speakers/terry_edward_branstad.svg',
  },
  {
    name: 'Joseph Lubin',
    description: 'Founder & CEO of ConsenSys',
    image: '/images/speakers/terry_edward_branstad.svg',
  },
]

const speaker = [
  {
    name: 'Suji Yan',
    description: 'Founder of Mask Network',
    image: '/images/speakers/suji_yan.svg',
  },
  {
    name: 'Sam Williams',
    description: 'Founder and CEO of Arweave',
    image: '/images/speakers/sam_williams.svg',
  },
  {
    name: 'Wu Xiao',
    description: 'CEO of White Matrix & Founder of ChainlDE',
    image: '/images/speakers/wu_xiao.svg',
  },
  {
    name: 'Sandeep Nailwal',
    description: 'Co-founder of Polygon Technology',
    image: '/images/speakers/sandeep_nailwal.svg',
  },
  {
    name: 'Dalip Tyagi',
    description: 'SVP and Head of Developer Relations of Polygon Technology',
    image: '/images/speakers/dalip_tyagi.svg',
  },
  {
    name: 'Qidong Sun',
    description: 'Art Director of MadeIn',
    image: '/images/speakers/qidong_sun.svg',
  },
  {
    name: 'Illia Polosukhin',
    description: 'Co-founder of NEAR',
    image: '/images/speakers/illia_polosukhin.svg',
  },
  {
    name: 'Nathan Schneider',
    description: 'Journalist, professor of Journalism at University of Colorado',
    image: '/images/speakers/nathan_schneider.svg',
  },
  {
    name: 'Chen Qiufan',
    description: 'Sci-fi Novelist',
    image: '/images/speakers/chen_qiufan.svg',
  },
  {
    name: 'Ling Zhang',
    description: 'Ling Zhang',
    image: '/images/speakers/ling_zhang.svg',
  },
  {
    name: 'Zhe Sun',
    description: '',
    image: '/images/speakers/zhe_sun.svg',
  },
  {
    name: 'To Be Announced',
    description: '',
    image: '/images/speakers/to_be_announced.svg',
  },
]

export const Speakers = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('speakers')} addition={t('speakers_title_note')} />
      </div>
      <div className="flex gap-x-9">
        {speakerMasters.map((x) => (
          <HumanCard
            name={x.name}
            description={x.description}
            image={x.image}
            key={x.name}
            backgroundClass={'speaker-master'}
          />
        ))}
      </div>
      <div className="mt-16 flex flex-wrap gap-7 px-16">
        {speaker.map((x) => (
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
