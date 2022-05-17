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
      <div className="mx-4 flex justify-center text-white xl:mx-0">
        <h3 className={`${directionMap[direction ?? 'normal']} inline-flex text-3xl font-bold xl:text-5xl`}>
          {content}
        </h3>
      </div>
      {addition && <p className={`text-center text-lg text-white`}>{addition}</p>}
    </div>
  )
}
