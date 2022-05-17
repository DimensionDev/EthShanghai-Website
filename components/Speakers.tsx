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
    image: '/images/speakers/tin_pei_ling.svg',
  },
  {
    name: 'Vitalik Buterin',
    description: 'Co-founder of Ethereum',
    image: '/images/speakers/vitalik_buterin.svg',
  },
  {
    name: 'Joseph Lubin',
    description: 'Founder & CEO of ConsenSys',
    image: '/images/speakers/joseph_lubin.svg',
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
    <div id="speakers">
      <div className="container m-auto mb-20 flex justify-center">
        <HeaderSection content={t('speakers')} addition={t('speakers_title_note')} />
      </div>
      <div className="m-auto flex justify-center bg-[#1E0054] py-12 px-8">
        <div className="container grid grid-cols-2 grid-rows-2 gap-9 xl:grid-cols-4 xl:grid-rows-1">
          {speakerMasters.map((x) => (
            <HumanCard
              name={x.name}
              description={x.description}
              image={x.image}
              key={x.name}
              backgroundClass={'bg-speaker-master'}
            />
          ))}
        </div>
      </div>
      <div className="container m-auto mb-20 flex justify-center px-8">
        <div className="container mt-12 grid grid-cols-2 grid-rows-2 gap-9 xl:grid-cols-4 xl:grid-rows-3 xl:px-20">
          {speaker.map((x) => (
            <HumanCard
              name={x.name}
              description={x.description}
              image={x.image}
              key={x.name}
              backgroundClass={'bg-speaker'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
