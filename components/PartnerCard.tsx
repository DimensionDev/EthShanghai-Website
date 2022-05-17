import Image from 'next/image'

interface PartnerCardProps {
  name: string
  description: string
  image: string
  backgroundClass: string
  width?: number
  height?: number
}

export const PartnerCard = ({
  name,
  description,
  image,
  backgroundClass,
  width = 320,
  height = 374,
}: PartnerCardProps) => {
  return (
    <div className={`${backgroundClass} rounded-xl bg-speaker-master text-white xl:rounded-2.5xl`}>
      <div className="p-3 xl:p-6">
        <div className="flex justify-center">
          {image.includes('.svg') ? <img src={image} alt={name} /> : <img srcSet={image} alt={name} />}
        </div>
        <div className="mt-2.5 flex flex-col justify-center gap-y-3">
          <p className="text-shadow text-center">{description}</p>
          <p className="text-shadow text-center font-bold">{name}</p>
        </div>
      </div>
    </div>
  )
}
