import { FC, ReactNode } from 'react'

interface IFiveCardWrapper {
    sectionBlockName: string
    children: ReactNode
    divider: boolean
}

const FiveCardWrapper: FC<IFiveCardWrapper> = ({
    sectionBlockName,
    children,
    divider
}) => {
  return (
    <div className={`${divider ? 'mb-6 mt-6 pb-6 border-b' : 'mb-6 mt-6 pb-6'}`}>
        <div className="mb-4 px-[20px] text-[12px] font-light leading-[15px] text-gray-500 xl:px-0">
            {sectionBlockName}
        </div>
        <div className="mt-6 justify-between gap-4 px-[20px] xl:flex xl:px-0">
            {children}
        </div>
    </div>
  )
}

export default FiveCardWrapper