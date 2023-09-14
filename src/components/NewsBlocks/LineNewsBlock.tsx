import { News } from '@/types/news'
import Link from 'next/link'
import { FC } from 'react'
import LineNewsCarousel from '../Articles/LineNewsCarousel'
import { Paths } from '@/data/Paths'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import dayjs from 'dayjs'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
import LineNewsFirstImg from '../Articles/LineNewsFirstImg'
import LineNewsMiniImgAndTitle from '../Articles/LineNewsMiniImgAndTitle'
import MiniNewsCarousel from '../Carousels/MiniNewsCarousel'
dayjs.extend(localeData);

interface ILineNewsBlock {
    data: News[]
    pathToNews: string
    pathToNewsToday: string
    link: string
}

const LineNewsBlock: FC<ILineNewsBlock> = ({
    data,
    pathToNews,
    pathToNewsToday,
    link
}) => {
    return (
        <div className="flex-col xl:w-[345px]">
        <div className="mt-4 px-[20px] xl:mt-0 xl:px-0">
            <div className="mb-4 flex gap-4">
                <Link
                    href={pathToNews}
                    className="text-[12px] font-light leading-[15px] text-gray-500 underline"
                >
                    Стрічка новин
                </Link>
                <div className="border-r"></div>
                <Link
                    href={pathToNewsToday}
                    className="text-[12px] font-light leading-[15px] text-gray-500 underline"
                >
                    Сьогоднішня Газета
                </Link>
            </div>
                {data
                    .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                    .slice(0, 5)
                    .map((news: News, index: number, array: News[]) => {
                        return(
                            <LineNewsFirstImg
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
                        )
                        })
                }
                <MiniNewsCarousel
                    blockTitle={'Думки'}
                    slidesToShowStart={1}
                    slidesToScrollStart={1}
                >
                    <LineNewsCarousel
                        data={data}
                        blockName={'Думка'}
                        sliceStart={0}
                        sliceEnd={10}
                        link={link}
                    />
                </MiniNewsCarousel>
                {data
                    .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                    .slice(5, 10)
                    .map((news: News, index: number, array: News[]) => (
                        <LineNewsMiniImgAndTitle
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
            {data
                .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                .slice(10, 15)
                .map((news: News, index: number, array: News[]) => (
                    <LineNewsFirstImg
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
            {data
                .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                .slice(15, 20)
                .map((news: News, index: number, array: News[]) => (
                    <LineNewsFirstImg
                        key={news.id}
                        index={index}
                        array={array}
                        imgUrl={news.mainImage}
                        imgDesc={news.mainImgDesc}
                        imgAuthor={news.mainImgAuthor}
                        title={news.title}
                        link={link}
                        articleFeed={news.feed}
                        feed={'Загальнонаціональна стрічка'}
                        url={news.url}
                        publishTime={news.publishedAt}
                    />
                ))
            }
            <MiniNewsCarousel
                blockTitle={'Аналітика'}
                slidesToShowStart={1}
                slidesToScrollStart={1}
            >
                <LineNewsCarousel
                    data={data}
                    blockName={'Аналітика'}
                    sliceStart={0}
                    sliceEnd={10}
                    link={link}
                />
            </MiniNewsCarousel>
        </div>
        </div>
    )
}

export default LineNewsBlock