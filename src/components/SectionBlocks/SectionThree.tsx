import { FC } from 'react'
import SectionMdImgTitleDesc from '../SectionArticles/SectionMdImgTitleDesc'
import SectionXLImgTitleDesc from '../SectionArticles/SectionXLImgTitleDesc'
import SectionSMTitle from '../SectionArticles/SectionSMTitle'
import { Section } from '@/types/section'
import { renderSection } from '@/utils/renderSection'

const SectionThree: FC<Section> = ({
    data,
    link
}) => {
    if (data.length <= 13) {
        return null
    }

    return (
        <div className="mb-6 gap-4 xl:flex">
            <div className="flex-col xl:w-[470px]">
                <div className="flex flex-col gap-5">
                    {renderSection(data.slice(13, 18), SectionMdImgTitleDesc, link, false)}
                </div>
            </div>
            <div className="border-r"></div>
            <div className="flex-col xl:w-[700px]">
                <div className="mb-4 flex flex-col gap-5 border-b pb-4">
                    {renderSection(data.slice(18, 19), SectionXLImgTitleDesc, link, false)}
                </div>
                <div className="mb-4 flex-wrap gap-4 border-b pb-4 xl:flex">
                    {renderSection(data.slice(19, 23), SectionSMTitle, link, false)}
                </div>
                <div className="mb-4 flex flex-col gap-5 border-b pb-4">
                    {renderSection(data.slice(23, 24), SectionXLImgTitleDesc, link, false)}
                </div>
            </div>
        </div>
    )
}

export default SectionThree