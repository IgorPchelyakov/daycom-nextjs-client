import { FC } from 'react'
import SectionSMImgTitle from '../SectionArticles/SectionSMImgTitle'
import { Section } from '@/types/section'
import { renderSection } from '@/utils/renderSection'

const SectionFour: FC<Section> = ({
    data,
    link
}) => {
    if (data.length <= 24) {
        return null
    }

    return (
        <div className="mb-6 border-y border-black pt-6">
            <div className="flex-wrap justify-between gap-y-4 xl:flex">
                {renderSection(data.slice(24, 30), SectionSMImgTitle, link, false)}
            </div>
        </div>
    )
}

export default SectionFour