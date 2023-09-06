import { LineNews } from '@/types/lineNews'
import { renderSection } from '@/utils/renderSection'
import { FC } from 'react'
import SectionSMImgTitle from '../SectionArticles/SectionSMImgTitle'

const LineNewsBlockFour: FC<LineNews> = ({
    data,
    link
}) => {
    if (data.length <= 24) {
        return null
    }

    return (
        <div className="mb-6 border-y border-black pt-6">
            <div className="flex-wrap justify-between gap-y-4 xl:flex">
                {renderSection(data.slice(24, 30), SectionSMImgTitle, link, true)}
            </div>
        </div>
    )
}

export default LineNewsBlockFour