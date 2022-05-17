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
      <div className="container relative z-20 m-auto my-0">
        <div className="flex h-full items-center justify-center">
          <div className="absolute bottom-0 left-0 w-1/2 xl:w-1/3">
            <img src={'/images/banner/shanghai_1.svg'} />
          </div>
          <div className="z-10 w-2/3 pt-10 xl:w-2/5">
            <div className="flex h-full justify-center">
              <img src={'/images/banner/title.svg'} />
            </div>
            <div className="z-30">{children}</div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 xl:w-1/3">
            <img src={'/images/banner/shanghai_2.svg'} />
          </div>
        </div>
      </div>
    </section>
  )
}
