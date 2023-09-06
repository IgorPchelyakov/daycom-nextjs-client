import { NewsPaper } from '@/types/newsPaper'
import { renderSection } from '@/utils/renderSection'
import { FC } from 'react'
import SectionCard from '../SectionArticles/SectionCard'

const TodayNewsPaperBlockTwo: FC<NewsPaper> = ({
    data,
    link
}) => {
    if (data.length <= 5) {
        return null
    }

    return (
        <div className="mb-6 border-y border-black pb-6 pt-6">
            <div className="grid-cols-5 gap-4 xl:grid xl:pl-4">
                {renderSection(data.slice(5), SectionCard, link, true)}
            </div>
        </div>
    )
}

export default TodayNewsPaperBlockTwo