import { LineNews } from '@/types/lineNews'
import { renderSection } from '@/utils/renderSection'
import { FC } from 'react'
import SectionCard from '../SectionArticles/SectionCard'

const LineNewsBlockFive: FC<LineNews> = ({
    data,
    link
}) => {
    if (data.length <= 30) {
        return null
    }

    return (
        <div className="mb-6 border-y border-black pb-6 pt-6">
            <div className="grid-cols-5 gap-4 xl:grid xl:pl-4">
                {renderSection(data.slice(30, 55), SectionCard, link, true)}
            </div>
        </div>
    )
}

export default LineNewsBlockFive