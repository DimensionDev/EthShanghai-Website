import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const speakerMasters = [
  {
    name: 'Terry Edward Branstad',
    description: 'Former U.S. Ambassador to China (2017-2020)',
    image:
      '/images/speakers/terry_edward_branstad.png 1x, /images/speakers/terry_edward_branstad@2x.png 2x, /images/speakers/terry_edward_branstad@3x.png 3x',
  },
  {
    name: 'Tin Pei Ling',
    description: 'CEO of Business China',
    image:
      '/images/speakers/tin_pei_ling.png 1x, /images/speakers/tin_pei_ling@2x.png 2x, /images/speakers/tin_pei_ling@3x.png 3x',
  },
  {
    name: 'Vitalik Buterin',
    description: 'co-founder of ethereum',
    image:
      '/images/speakers/vitalik_buterin.png 1x, /images/speakers/vitalik_buterin@2x.png 2x, /images/speakers/vitalik_buterin@3x.png 3x',
  },
  {
    name: 'Joseph Lubin',
    description: 'Founder & CEO of ConsenSys',
    image:
      '/images/speakers/joseph_lubin.png 1x, /images/speakers/joseph_lubin@2x.png 2x, /images/speakers/joseph_lubin@3x.png 3x',
  },
]

const speaker = [
  {
    name: 'Suji Yan',
    description: 'Founder of Mask Network',
    image: '/images/speakers/suji_yan.png 1x, /images/speakers/suji_yan@2x.png 2x, /images/speakers/suji_yan@3x.png 3x',
  },
  {
    name: 'Sam Williams',
    description: 'Founder and CEO of Arweave',
    image:
      '/images/speakers/sam_williams.png 1x, /images/speakers/sam_williams@2x.png 2x, /images/speakers/sam_williams@3x.png 3x',
  },
  {
    name: 'Wu Xiao',
    description: 'CEO of White Matrix & Founder of ChainlDE',
    image: '/images/speakers/wu_xiao.png 1x, /images/speakers/wu_xiao@2x.png 2x, /images/speakers/wu_xiao@3x.png 3x',
  },
  {
    name: 'Sandeep Nailwal',
    description: 'Co-founder of Polygon Technology',
    image:
      '/images/speakers/sandeep_nailwal.png 1x, /images/speakers/sandeep_nailwal@2x.png 2x, /images/speakers/sandeep_nailwal@3x.png 3x',
  },
  {
    name: 'Dalip Tyagi',
    description: 'SVP and Head of Developer Relations of Polygon Technology',
    image:
      '/images/speakers/dalip_tyagi.png 1x, /images/speakers/dalip_tyagi@2x.png 2x, /images/speakers/dalip_tyagi@3x.png 3x',
  },
  {
    name: 'Qidong Sun',
    description: 'Art Director of MadeIn',
    image:
      '/images/speakers/qidong_sun.png 1x, /images/speakers/qidong_sun@2x.png 2x, /images/speakers/qidong_sun@3x.png 3x',
  },
  {
    name: 'Illia Polosukhin',
    description: 'Co-founder of NEAR',
    image:
      '/images/speakers/illia_polosukhin.png 1x, /images/speakers/illia_polosukhin@2x.png 2x, /images/speakers/illia_polosukhin@3x.png 3x',
  },
  {
    name: 'Nathan Schneider',
    description: 'Journalist, professor of Journalism at University of Colorado',
    image:
      '/images/speakers/nathan_schneider.png 1x, /images/speakers/nathan_schneider@2x.png 2x, /images/speakers/nathan_schneider@3x.png 3x',
  },
  {
    name: 'Chen Qiufan',
    description: 'Sci-fi Novelist',
    image:
      '/images/speakers/chen_qiufan.png 1x, /images/speakers/chen_qiufan@2x.png 2x, /images/speakers/chen_qiufan@3x.png 3x',
  },
  {
    name: 'Ling Zhang',
    description: 'Ling Zhang',
    image:
      '/images/speakers/ling_zhang.png 1x, /images/speakers/ling_zhang@2x.png 2x, /images/speakers/ling_zhang@3x.png 3x',
  },
  {
    name: 'Zhe Sun',
    description: 'Founder of Quantum Schoo',
    image: '/images/speakers/zhe_sun.png 1x, /images/speakers/zhe_sun@2x.png 2x, /images/speakers/zhe_sun@3x.png 3x',
  },
  {
    name: 'To Be Announced',
    description: '',
    image:
      '/images/speakers/to_be_announced.png 1x, /images/speakers/to_be_announced@2x.png 2x, /images/speakers/to_be_announced@3x.png 3x',
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
        <div className="container grid grid-cols-2 grid-rows-2 gap-6 xl:grid-cols-4 xl:grid-rows-1 xl:gap-9">
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
      <div className="container m-auto flex justify-center px-8">
        <div className="container mt-12 grid grid-cols-2 grid-rows-2 gap-6 xl:grid-cols-4 xl:grid-rows-3 xl:gap-9 xl:px-20">
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
