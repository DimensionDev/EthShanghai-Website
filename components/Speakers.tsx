import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const speakerMasters = (t: any) => [
  {
    name: t('speaker_terry_edward_branstad'),
    description: t('speaker_terry_edward_branstad_intro'),
    image:
      '/images/speakers/terry_edward_branstad.png 1x, /images/speakers/terry_edward_branstad@2x.png 2x, /images/speakers/terry_edward_branstad@3x.png 3x',
  },
  {
    name: t('speaker_tin_pei_ling'),
    description: t('speaker_tin_pei_ling_intro'),
    image:
      '/images/speakers/tin_pei_ling.png 1x, /images/speakers/tin_pei_ling@2x.png 2x, /images/speakers/tin_pei_ling@3x.png 3x',
  },
  {
    name: t('speaker_vitalik_buterin'),
    description: t('speaker_vitalik_buterin_intro'),
    image:
      '/images/speakers/vitalik_buterin.png 1x, /images/speakers/vitalik_buterin@2x.png 2x, /images/speakers/vitalik_buterin@3x.png 3x',
  },
  {
    name: t('speaker_joseph_lubin'),
    description: t('speaker_joseph_lubin_intro'),
    image:
      '/images/speakers/joseph_lubin.png 1x, /images/speakers/joseph_lubin@2x.png 2x, /images/speakers/joseph_lubin@3x.png 3x',
  },
]

const speaker = (t: any) => [
  {
    name: t('speaker_suji_yan'),
    description: t('speaker_suji_yan_intro'),
    image: '/images/speakers/suji_yan.png 1x, /images/speakers/suji_yan@2x.png 2x, /images/speakers/suji_yan@3x.png 3x',
  },
  {
    name: t('speaker_sam_williams'),
    description: t('speaker_sam_williams_intro'),
    image:
      '/images/speakers/sam_williams.png 1x, /images/speakers/sam_williams@2x.png 2x, /images/speakers/sam_williams@3x.png 3x',
  },
  {
    name: t('speaker_wu_xiao'),
    description: t('speaker_wu_xiao_intro'),
    image: '/images/speakers/wu_xiao.png 1x, /images/speakers/wu_xiao@2x.png 2x, /images/speakers/wu_xiao@3x.png 3x',
  },
  {
    name: t('speaker_sandeep_nailwal'),
    description: t('speaker_sandeep_nailwal_intro'),
    image:
      '/images/speakers/sandeep_nailwal.png 1x, /images/speakers/sandeep_nailwal@2x.png 2x, /images/speakers/sandeep_nailwal@3x.png 3x',
  },
  {
    name: t('speaker_dalip_tyagi'),
    description: t('speaker_dalip_tyagi_intro'),
    image:
      '/images/speakers/dalip_tyagi.png 1x, /images/speakers/dalip_tyagi@2x.png 2x, /images/speakers/dalip_tyagi@3x.png 3x',
  },
  {
    name: t('speaker_qidong_sun'),
    description: t('speaker_qidong_sun_intro'),
    image:
      '/images/speakers/qidong_sun.png 1x, /images/speakers/qidong_sun@2x.png 2x, /images/speakers/qidong_sun@3x.png 3x',
  },
  {
    name: t('speaker_illia_polosukhin'),
    description: t('speaker_illia_polosukhin_intro'),
    image:
      '/images/speakers/illia_polosukhin.png 1x, /images/speakers/illia_polosukhin@2x.png 2x, /images/speakers/illia_polosukhin@3x.png 3x',
  },
  {
    name: t('speaker_nathan_schneider'),
    description: t('speaker_nathan_schneider_intro'),
    image:
      '/images/speakers/nathan_schneider.png 1x, /images/speakers/nathan_schneider@2x.png 2x, /images/speakers/nathan_schneider@3x.png 3x',
  },
  {
    name: t('speaker_chen_qiufan'),
    description: t('speaker_chen_qiufan_intro'),
    image:
      '/images/speakers/chen_qiufan.png 1x, /images/speakers/chen_qiufan@2x.png 2x, /images/speakers/chen_qiufan@3x.png 3x',
  },
  {
    name: t('speaker_jinhai_luo'),
    description: t('speaker_jinhai_luo_intro'),
    image:
      '/images/speakers/jinhai_luo.png 1x, /images/speakers/jinhai_luo@2x.png 2x, /images/speakers/jinhai_luo@3x.png 3x',
  },
  {
    name: t('speaker_ling_zhang'),
    description: t('speaker_ling_zhang_intro'),
    image:
      '/images/speakers/ling_zhang.png 1x, /images/speakers/ling_zhang@2x.png 2x, /images/speakers/ling_zhang@3x.png 3x',
  },
  {
    name: t('speaker_zhe_sun'),
    description: t('speaker_zhe_sun_intro'),
    image: '/images/speakers/zhe_sun.png 1x, /images/speakers/zhe_sun@2x.png 2x, /images/speakers/zhe_sun@3x.png 3x',
  },
  {
    name: t('speaker_zhou_jinfeng'),
    description: t('speaker_zhou_jinfeng_intro'),
    image:
      '/images/speakers/zhou_jinfeng.png 1x, /images/speakers/zhou_jinfeng@2x.png 2x, /images/speakers/zhou_jinfeng@3x.png 3x',
  },
  {
    name: t('speaker_eva_beylin'),
    description: t('speaker_eva_beylin_intro'),
    image:
      '/images/speakers/eva_beylin.png 1x, /images/speakers/eva_beylin@2x.png 2x, /images/speakers/eva_beylin@3x.png 3x',
  },
  {
    name: t('speaker_yang_wang'),
    description: t('speaker_yang_wang_intro'),
    image:
      '/images/speakers/yang_wang.png 1x, /images/speakers/yang_wang@2x.png 2x, /images/speakers/yang_wang@3x.png 3x',
  },
  {
    name: t('speaker_mike_yao'),
    description: t('speaker_mike_yao_intro'),
    image: '/images/speakers/mike_yao.png 1x, /images/speakers/mike_yao@2x.png 2x, /images/speakers/mike_yao@3x.png 3x',
  },
  {
    name: t('speaker_to_be_announced'),
    description: t('speaker_to_be_announced_intro'),
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
        <div className="hack-speak container grid grid-cols-2 grid-rows-2 gap-4 xl:grid-cols-4 xl:grid-rows-1 xl:gap-9">
          {speakerMasters(t).map((x) => (
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
        <div className="container mt-12 grid grid-cols-2 grid-rows-2 gap-4 xl:grid-cols-4 xl:grid-rows-3 xl:gap-9 xl:px-20">
          {speaker(t).map((x) => (
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
