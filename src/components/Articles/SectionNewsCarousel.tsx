import { FC } from 'react'
import { News } from '@/types/news'
import Link from 'next/link'
import { Image } from 'antd'
import { currentDate } from '../CurrentDate/dateCheckFunc'

interface ISectionNewsCarousel {
    data: News[]
    blockName: string
    blockName2?: string
    blockName3?: string
    sliceStart: number
    sliceEnd: number
    link: string
}

const SectionNewsCarousel: FC<ISectionNewsCarousel> = ({
    data,
    blockName,
    blockName2,
    blockName3,
    sliceStart,
    sliceEnd,
    link
}) => {
    return (
        <>
            {data
                .filter((news: News) => news.section === blockName ||
                    news.section === blockName2 ||
                    (news.section === blockName3
                    && new Date(news.publishedAt) <= currentDate))
                .slice(sliceStart, sliceEnd)
                .map((news: News) => (
                    <div key={news.id}>
                        <Link href={`${link}/${news.url}`}
                            className='items-center justify-between gap-4 pr-5 xl:flex'
                        >
                            <div className="px-[20px] xl:max-w-[500px] xl:px-0">
                                <h2 className="mb-4 text-[16px] leading-[19px]">
                                    {news.title}
                                </h2>
                                <p className="mb-4 text-[13px] font-light leading-[16px] text-gray-500">
                                    {news.desc}
                                </p>
                            </div>
                            <Image
                                className="object-cover xl:max-h-[200px] xl:min-h-[200px] xl:min-w-[280px] xl:max-w-[200px] xl:rounded-md"
                                src={news.mainImage}
                                alt={news.mainImgDesc}
                                preview={false}
                            />
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default SectionNewsCarousel