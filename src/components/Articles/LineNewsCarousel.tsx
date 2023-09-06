import { News } from '@/types/news'
import { Image } from 'antd'
import Link from 'next/link'
import { FC } from 'react'
import { currentDate } from '../CurrentDate/dateCheckFunc'

interface ILineNewsCarousel {
    data: News[]
    blockName: string
    sliceStart: number
    sliceEnd: number
    link: string
}

const LineNewsCarousel: FC<ILineNewsCarousel> = ({
    data,
    blockName,
    sliceStart,
    sliceEnd,
    link
}) => {
    return (
        <>
            {data
                .filter((news: News) => news.section === blockName && new Date(news.publishedAt) <= currentDate)
                .slice(sliceStart, sliceEnd)
                .map((news: News) => (
                    <div key={news.id}>
                        <Link
                            href={`${link}/${news.url}`}
                            className="ml-[16px]"
                        >
                            <div className="flex flex-col">
                                <Image
                                    className="max-h-[320px] rounded-md object-cover 
                                        xl:max-h-[160px] xl:min-h-[160px] xl:min-w-[315px] xl:max-w-[315px]"
                                    src={news.mainImage}
                                    alt={news.mainImgDesc}
                                    preview={false}
                                />
                                <div className="mt-3 xl:max-w-[500px]">
                                    <h2 className="text-[14px] font-light leading-[17px]">
                                        {news.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default LineNewsCarousel