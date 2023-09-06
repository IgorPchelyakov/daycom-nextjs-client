import { renderSection } from '@/utils/renderSection'
import { FC } from 'react'
import SectionMdImg from '../SectionArticles/SectionMdImg'
import SectionBigImg from '../SectionArticles/SectionBigImg'
import { NewsPaper } from '@/types/newsPaper'

const TodayNewspaperBlockOne: FC<NewsPaper> = ({
    data,
    link
}) => {
    if (data.length === 0) {
        return <p className='text-center'>Публікацій немає</p>;
    }

    return (
        <>
            <div className="mb-4 justify-between gap-4 border-b pb-6 xl:flex">
                <div className="xl:w-[309px]">
                    <div className="flex flex-col gap-4">
                        {renderSection(data.slice(0, 2), SectionMdImg, link, true)}
                    </div>
                </div>
                <div className="border"></div>
                <div className="xl:w-[520px]">
                    {renderSection(data.slice(2, 3), SectionBigImg, link, true)}
                </div>
                <div className="border"></div>
                <div className="xl:w-[309px]">
                    <div className="flex flex-col gap-4">
                        {renderSection(data.slice(3, 5), SectionMdImg, link, true)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayNewspaperBlockOne