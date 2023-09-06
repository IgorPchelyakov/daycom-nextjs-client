import { FC } from 'react'
import SectionImgTitle from '../SectionArticles/SectionImgTitle'
import { Section } from '@/types/section'
import { renderSection } from '@/utils/renderSection'


const SectionTwo: FC<Section> = ({
    data,
    link
}) => {
    if (data.length <= 9) {
        return null
    }

    return (
        <div className="mb-4 gap-5 border-b border-black pb-4 xl:flex">
            {renderSection(data.slice(9, 13), SectionImgTitle, link, false)}
        </div>
    )
}

export default SectionTwo