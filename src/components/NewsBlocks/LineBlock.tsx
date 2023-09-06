import { News } from '@/types/news'
import { FC } from 'react'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import LineNewsTitleAndImg from '../Articles/LineNewsTitleAndImg'

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
                    {data
                        .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                        .slice(35, 41)
                        .map((news: News, index: number, array: News[]) => (
                            <LineNewsTitleAndImg
                                key={news.id}
                                index={index}
                                array={array}
                                imgUrl={news.mainImage}
                                imgDesc={news.mainImgDesc}
                                imgAuthor={news.mainImgAuthor}
                                title={news.title}
                                description={news.desc}
                                link={link}
                                articleFeed={news.feed}
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                                publishTime={news.publishedAt}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LineBlock