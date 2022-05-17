import Image from 'next/image'
import { ReactNode } from 'react'

interface BannerProps {
  children: ReactNode
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <section className="relative bottom-26 z-0 flex h-200 bg-no-repeat">
      <div className="absolute top-0 left-0 z-10 block h-full w-full">
        <Image src={'/images/banner/banner_bg.svg'} layout="fill" objectFit="cover" alt={'TODO'} />
      </div>
      <div className="container relative z-20 m-auto">
        <div className="flex items-end justify-center">
          <div className="w-1/3">
            <img src={'/images/banner/shanghai_1.svg'} />
          </div>
          <div className="w-2/5 pt-32">
            <div className="flex justify-center">
              <img src={'/images/banner/title.svg'} />
            </div>
            <div>{children}</div>
          </div>
          <div className="w-1/3">
            <img src={'/images/banner/shanghai_2.svg'} />
          </div>
        </div>
      </div>
    </section>
  )
}
