import { useTranslation } from 'next-i18next'
import { Icon } from './Icon'

export const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="flex flex-col justify-center gap-x-24 gap-y-16 bg-footer p-16 text-white md:flex-row xl:gap-x-80">
      <div className="flex flex-col gap-y-12">
        <div id="contact-us">
          <h4 className="inline-flex border-b-6 border-nav text-xl font-bold  leading-6 xl:text-4xl">
            {t('footer_contact_us')}
          </h4>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-3">
            <div className="inline-flex">
              <Icon name={'discord'} />
            </div>
            <p>ETH Shanghai</p>
          </div>
          <div className="flex gap-x-3">
            <div className="inline-flex">
              <Icon name={'twitter'} />
            </div>
            <p>@ETHshanghai2022</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-12">
        <div>
          <h4 className="inline-flex border-b-6 border-nav text-xl font-bold leading-6 xl:text-4xl">
            {t('footer_live_streaming')}
          </h4>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-3">
            <div className="inline-flex">
              <Icon name={'youtube'} />
            </div>
            <p>YouTube live Streaming(English)</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
