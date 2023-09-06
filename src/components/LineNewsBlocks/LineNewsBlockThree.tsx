import { LineNews } from '@/types/lineNews'
import { renderSection } from '@/utils/renderSection'
import { FC } from 'react'
import SectionMdImgTitleDesc from '../SectionArticles/SectionMdImgTitleDesc'
import SectionXLImgTitleDesc from '../SectionArticles/SectionXLImgTitleDesc'
import SectionSMTitle from '../SectionArticles/SectionSMTitle'

const LineNewsBlockThree: FC<LineNews> = ({
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
                    {renderSection(data.slice(13, 18), SectionMdImgTitleDesc, link, true)}
                </div>
            </div>
            <div className="border-r"></div>
            <div className="flex-col xl:w-[700px]">
                <div className="mb-4 flex flex-col gap-5 border-b pb-4">
                    {renderSection(data.slice(18, 19), SectionXLImgTitleDesc, link, true)}
                </div>
                <div className="mb-4 flex-wrap gap-4 border-b pb-4 xl:flex">
                    {renderSection(data.slice(19, 23), SectionSMTitle, link, true)}
                </div>
                <div className="mb-4 flex flex-col gap-5 border-b pb-4">
                    {renderSection(data.slice(23, 24), SectionXLImgTitleDesc, link, true)}
                </div>
            </div>
        </div>
    )
}

export default LineNewsBlockThree