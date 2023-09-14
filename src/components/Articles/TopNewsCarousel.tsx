import { Paths } from '@/data/Paths'
import { News } from '@/types/news'
import { Image } from 'antd'
import Link from 'next/link'
import { FC } from 'react'
import { currentDate } from '../CurrentDate/dateCheckFunc'

interface ITopNewsCarousel {
    data: News[]
    blockName: string
    sliceStart: number
    sliceEnd: number
    link: string
    feed?: string
}

const TopNewsCarousel: FC<ITopNewsCarousel> = ({
    data,
    blockName,
    sliceStart,
    sliceEnd,
    link,
    feed
}) => {

    return (
        <>
            {data
                .filter((news: News) => news.block === blockName && new Date(news.publishedAt) <= currentDate)
                .slice(sliceStart, sliceEnd)
                .map((news: News) => {
                    const isGeneralFeed = news.feed === feed
                    const linkTo = isGeneralFeed ? Paths.news : link

                    return(
                            <div key={news.id}>
                            <Link href={`${linkTo}/${news.url}`}
                                className='relative block min-h-full xl:w-[280px]'
                            >
                                <Image
                                    alt={news.mainImgDesc}
                                    className="min-h-[400px] object-cover xl:max-h-[190px] xl:min-h-[190px] xl:min-w-[280px] xl:rounded-md"
                                    src={news.mainImage}
                                    preview={false}
                                />
                                <h2 className='px-[20px] xl:px-0'>{news.title}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TopNewsCarousel