import React, { FC } from 'react'
import Heading24Hours from '../Articles/Heading24Hours'
import { News } from '@/types/news'
import MainTodayNoImg from '../Articles/MainTodayNoImg'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import MainTodayWithImg from '../Articles/MainTodayWithImg'
import MainTodayImgAndTitle from '../Articles/MainTodayImgAndTitle'
import MainTodayOnlyTitle from '../Articles/MainTodayOnlyTitle'

interface IMainToday {
    data: News[]
    link: string
}

const MainTodayBlock: FC<IMainToday> = ({
    data,
    link
}) => {
    return (
    <div className="mx-auto mt-7 flex-col justify-center px-[20px] xl:max-w-[1200px] xl:px-0">
        <Heading24Hours 
            data={data}
            block={'Заголовок газети 24 години'}
            feed={'Загальнонаціональна стрічка'}
            link={link}
        />
        <div 
            className="mb-4 flex flex-col items-center gap-4 border-b pb-6
            xl:flex-row xl:items-start xl:justify-between"
        >
            <div className="w-full xl:w-[289px]">
                <div className="mb-4 text-[12px] font-light leading-[15px] text-gray-600">
                    Головне сьогодні
                </div>
                {data
                    .filter((news: News) => news.block === 'Головне сьогодні' && new Date(news.publishedAt) <= currentDate)
                    .slice(1, 3)
                    .map((news: News, index: number, array: News[]) => (
                    <MainTodayNoImg
                        key={news.id}
                        index={index}
                        array={array}
                        title={news.title}
                        description={news.desc}
                        link={link}
                        articleFeed={news.feed}
                        feed={'Загальнонаціональна стрічка'}
                        url={news.url}
                    />
                    ))
                }
            </div>
            <div className="w-full xl:w-[530px] xl:border-r xl:pr-6">
                {data
                    .filter((news: News) => news.block === 'Головне сьогодні' && new Date(news.publishedAt) <= currentDate)
                    .slice(0, 1)
                    .map((news: News, index: number, array: News[]) => (
                    <MainTodayWithImg
                        key={news.id}
                        index={index}
                        array={array}
                        title={news.title}
                        imgUrl={news.mainImage}
                        imgDesc={news.mainImgDesc}
                        imgAuthor={news.mainImgAuthor}
                        description={news.desc}
                        link={link}
                        articleFeed={news.feed}
                        feed={'Загальнонаціональна стрічка'}
                        url={news.url}
                    />
                    ))
                }
            </div>
            <div className="w-full xl:w-[345px]">
                {data
                    .filter((news: News) => news.block === 'Головне сьогодні' && new Date(news.publishedAt) <= currentDate)
                    .slice(3, 6)
                    .map((news: News, index: number, array: News[]) => (
                    <MainTodayImgAndTitle
                        key={news.id}
                        index={index}
                        array={array}
                        title={news.title}
                        imgUrl={news.mainImage}
                        imgDesc={news.mainImgDesc}
                        imgAuthor={news.mainImgAuthor}
                        link={link}
                        articleFeed={news.feed}
                        feed={'Загальнонаціональна стрічка'}
                        url={news.url}
                    />
                    ))
                }
            </div>
        </div>
        <div className="mb-4 border-b border-black pb-4 xl:flex xl:justify-between xl:gap-4">
            {data
                .filter((news: News) => news.block === 'Головне сьогодні' && new Date(news.publishedAt) <= currentDate)
                .slice(6, 10)
                .map((news: News, index: number, array: News[]) =>(
                    <MainTodayOnlyTitle
                        key={news.id}
                        index={index}
                        array={array}
                        title={news.title}
                        link={link}
                        articleFeed={news.feed}
                        feed={'Загальнонаціональна стрічка'}
                        url={news.url}
                    />
                ))
            }
        </div>
    </div>
    )
}

export default MainTodayBlock