interface HeaderSectionProps {
  content: string
  addition?: string
  direction?: 'normal' | 'reverse'
}

const directionMap = {
  normal: 'header-section',
  reverse: 'header-section-reverse',
}

export const HeaderSection = ({ content, direction, addition }: HeaderSectionProps) => {
  return (
    <div>
      <div className="flex justify-center text-white">
        <h3 className={`${directionMap[direction ?? 'normal']} inline-flex text-5xl font-bold`}>{content}</h3>
      </div>
      {addition && <p className={`text-center text-lg text-white`}>{addition}</p>}
    </div>
  )
}
