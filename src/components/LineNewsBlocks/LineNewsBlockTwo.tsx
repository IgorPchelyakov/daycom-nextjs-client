import { FC } from 'react'
import { LineNews } from '@/types/lineNews'
import { renderSection } from '@/utils/renderSection'
import SectionImgTitle from '../SectionArticles/SectionImgTitle'

const LineNewsBlockTwo: FC<LineNews> = ({
    data,
    link
}) => {
    if (data.length <= 9) {
        return null
    }

    return (
        <div className="mb-4 gap-5 border-b border-black pb-4 xl:flex">
            {renderSection(data.slice(9, 13), SectionImgTitle, link, true)}
        </div>
    )
}

export default LineNewsBlockTwo