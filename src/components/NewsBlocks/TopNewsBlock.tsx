import { News } from '@/types/news'
import { FC } from 'react'
import TopNewsCarousel from '../Articles/TopNewsCarousel'
import NewsCarousel from '../Carousels/NewsCarousel'

interface ITopNewsBlock {
    data: News[]
    blockTitle: string
    blockName: string
    sliceStart: number
    sliceEnd: number
    slidesToShowStart: number
    slidesToShowEnd: number
    slidesToScrollStart: number
    slidesToScrollEnd: number
    link: string
}

const TopNewsBlock: FC<ITopNewsBlock> = ({
    data,
    blockTitle,
    blockName,
    sliceStart,
    sliceEnd,
    slidesToShowStart,
    slidesToShowEnd,
    slidesToScrollStart,
    slidesToScrollEnd,
    link
}) => {
    return (
        <div className='border-b border-black mx-auto max-w-[1200px]'>
            <NewsCarousel
                blockTitle={blockTitle}
                slidesToShowStart={slidesToShowStart}
                slidesToShowEnd={slidesToShowEnd}
                slidesToScrollStart={slidesToScrollStart}
                slidesToScrollEnd={slidesToScrollEnd}
            >
                <TopNewsCarousel
                    data={data}
                    blockName={blockName}
                    sliceStart={sliceStart}
                    sliceEnd={sliceEnd}
                    link={link}
                    feed={'Загальнонаціональна стрічка'}
                />
            </NewsCarousel>
        </div>
    )
}

export default TopNewsBlock