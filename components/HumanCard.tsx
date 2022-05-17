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
    <div className={`${backgroundClass} rounded-xl bg-speaker-master text-white xl:rounded-2.5xl`}>
      <div className="p-3 xl:p-6">
        <div>
          <img src={image} alt={'TODO'} />
        </div>
        <div className="mt-2.5 flex flex-col justify-center gap-y-3">
          <p className="text-shadow text-center text-2xl font-bold">{name}</p>
          <p className="text-shadow text-center">{description}</p>
        </div>
      </div>
    </div>
  )
}
