import Image from 'next/image'

export type Icons = 'twitter' | 'discord' | 'youtube'

interface IconProps {
  name: Icons
  size?: number
}

export const Icon = ({ name, size = 24 }: IconProps) => {
  return (
    <div className="inline-flex">
      <Image src={`/icons/${name}_icon.svg`} width={size} height={size} layout={'fixed'} />
    </div>
  )
}
