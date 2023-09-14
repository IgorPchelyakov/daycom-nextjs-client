import { News } from '@/types/news'
import { FC } from 'react'
import LineNewsTitleAndImg from '../Articles/LineNewsTitleAndImg'
import { renderArticlesBlock } from '@/utils/renderArticlesBlock'

interface ILineBlock {
    data: News[]
    link: string
}

const LineBlock: FC<ILineBlock> = ({
    data,
    link
}) => {
    return (
        <div className="mx-auto flex-col justify-center xl:flex xl:max-w-[1200px]">
            <div className="mb-6 border-y border-black pt-6">
                <div className="xl:flex xl:flex-wrap xl:justify-between xl:gap-y-4">
                    {renderArticlesBlock(data, 35, 41, LineNewsTitleAndImg, 'Загальнонаціональна стрічка', link, 'Стрічка новин')}
                </div>
            </div>
        </div>
    )
}

export default LineBlock