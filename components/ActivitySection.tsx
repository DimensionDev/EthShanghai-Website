import { memo, ReactNode } from 'react'

interface ActivitySectionProps {
  title: ReactNode
  illustration: ReactNode
  direction?: 'left-to-right' | 'right-to-left'
  children: ReactNode
}

const directionMap = {
  'left-to-right': 'flex-row',
  'right-to-left': 'flex-row-reverse',
}

const titleDirectionMap = {
  'left-to-right': 'flex-row-reverse',
  'right-to-left': 'flex-row',
}

export const ActivitySection = memo<ActivitySectionProps>(({ title, illustration, direction, children }) => {
  return (
    <section className="flex flex-col gap-y-20">
      <div className={'mx-4 flex xl:mx-0'}>{title}</div>
      <div className={`flex flex-col-reverse gap-x-8 xl:hidden`}>
        <div className="flex max-w-full items-center justify-center">{illustration}</div>
        <div>{children}</div>
      </div>
      <div className={`hidden xl:flex ${directionMap[direction ?? 'left-to-right']} gap-x-8`}>
        <div className="flex max-w-full items-center justify-center">{illustration}</div>
        <div>{children}</div>
      </div>
    </section>
  )
})
