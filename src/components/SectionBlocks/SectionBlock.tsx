import { News } from '@/types/news'
import { Button } from 'antd'
import { FC } from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import { filterNewsBySectionAndDate } from '@/utils/filterNews'

interface ISectionBlock {
    data: News[]
    link: string
    sectionMetaTitle: string
    sectionMetaDescription: string
    selectedSection: string | undefined
}

const SectionBlock: FC<ISectionBlock> = ({
    data,
    link,
    sectionMetaTitle,
    sectionMetaDescription,
    selectedSection
}) => {
    const filteredData = filterNewsBySectionAndDate(data, selectedSection)

    return (
        <>
            <div className="mx-auto max-w-[1200px] pt-6">
                <div className="px-[20px] xl:px-0">
                    <h1 className="mb-3 text-[26px] font-extralight leading-[29px] xl:text-[36px] xl:leading-[44px]">
                        {sectionMetaTitle}
                    </h1>
                    <p className="mb-4 text-[12px] font-light leading-[15px] text-gray-500">
                        {sectionMetaDescription}
                    </p>
                    <div className="mb-6 items-center justify-between border-b border-black pb-4 xl:flex">
                        <div className="mb-4 xl:mb-0">Загальнонаціональна стрічка</div>
                        <Button type={'default'} disabled>
                            Повідомити про новину
                        </Button>
                    </div>
                </div>
                <SectionOne
                    data={filteredData}
                    link={link}
                />
                <SectionTwo 
                    data={filteredData}
                    link={link}
                />
                <SectionThree
                    data={filteredData}
                    link={link}
                />
                <SectionFour
                    data={filteredData}
                    link={link}
                />
                <SectionFive
                    data={filteredData}
                    link={link}
                />
                <SectionSix
                    data={filteredData}
                    link={link}
                />
            </div>
        </>
    )
}

export default SectionBlock