import Image from 'next/image'

export const Banner = () => {
  return (
    <section className="relative bottom-26 z-0 flex h-200 bg-no-repeat">
      <div className="block h-full w-full">
        <Image src={'/images/banner.svg'} layout="responsive" width={1910} height={791} alt={'TODO'} />
      </div>
    </section>
  )
}
