import { FC, ReactNode } from 'react'

interface ISectionBlockName {
    sectionBlockName: string
    children: ReactNode
}

const SectionBlockName: FC<ISectionBlockName> = ({
    sectionBlockName,
    children,
}) => {
    return (
        <div className="mb-6 border-b border-black">
            <div className="mb-4 px-[20px] text-[12px] font-light leading-[15px] text-gray-500 xl:px-0">
                {sectionBlockName}
            </div>
            <div className="flex-col xl:w-[824px]">
                <div className={'relative min-w-full'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SectionBlockName