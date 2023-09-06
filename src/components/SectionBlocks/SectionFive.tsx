import { FC } from 'react'
import SectionCard from '../SectionArticles/SectionCard'
import { Section } from '@/types/section'
import { renderSection } from '@/utils/renderSection'

const SectionFive: FC<Section> = ({
    data,
    link
}) => {
    if (data.length <= 30) {
        return null
    }

    return (
        <div className="mb-6 border-y border-black pb-6 pt-6">
            <div className="grid-cols-5 gap-4 xl:grid xl:pl-4">
                {renderSection(data.slice(30, 55), SectionCard, link, false)}
            </div>
        </div>
    )
}

export default SectionFive