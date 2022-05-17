import Image from 'next/image'

interface HumanCardProps {
  name: string
  description: string
  image: string
  backgroundClass: string
  width?: number
  height?: number
}

export const HumanCard = ({ name, description, image, backgroundClass, width = 320, height = 374 }: HumanCardProps) => {
  return (
    <div
      className={`${backgroundClass} w-1/4 rounded-2.5xl bg-speaker-master text-white`}
      style={{ flex: '1 0 21%', maxWidth: 368 }}>
      <div className="p-6">
        <Image src={image} layout="responsive" width={width} height={height} alt={'TODO'} />
        <div className="mt-2.5 flex flex-col justify-center gap-y-3">
          <p className="text-shadow text-center text-2xl font-bold">{name}</p>
          <p className="text-shadow text-center">{description}</p>
        </div>
      </div>
    </div>
  )
}
