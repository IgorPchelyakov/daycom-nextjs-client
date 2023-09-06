import { News } from '@/types/news'
import React, { FC } from 'react'
import FiveCardWrapper from '../UI/Wrappers/FiveCardWrapper'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import NewsCard from '../Articles/NewsCard'

interface IFiveCardBlock {
    data: News[]
    link: string
}

const FiveCardBlock: FC<IFiveCardBlock> = ({
    data,
    link
}) => {
    return (
        <div className="mx-auto xl:max-w-[1200px] border-t border-black">
            <FiveCardWrapper
                sectionBlockName={'Політика та Влада'}
                divider={true}>
                {data
                    .filter((news: News) => news.section === 'Політика' ||
                        (news.section === 'Влада'
                        && new Date(news.publishedAt) <= currentDate))
                    .slice(0, 5)
                    .map((news: News, index: number, array: News[]) => (
                        <NewsCard
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
                            />
                    ))
                }
            </FiveCardWrapper>
            <FiveCardWrapper
                sectionBlockName={'Північна та Південна Америка'}
                divider={true}>
                {data
                    .filter((news: News) => news.section === 'Північна Америка' ||
                        (news.section === 'Південна Америка'
                        && new Date(news.publishedAt) <= currentDate))
                    .slice(0, 5)
                    .map((news: News, index: number, array: News[]) => (
                        <NewsCard
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
                            />
                    ))
                }
            </FiveCardWrapper>
            <FiveCardWrapper
                sectionBlockName={'Близький схід'}
                divider={true}>
                {data
                    .filter((news: News) => news.section === 'Близький схід'
                        && new Date(news.publishedAt) <= currentDate)
                    .slice(0, 5)
                    .map((news: News, index: number, array: News[]) => (
                        <NewsCard
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
                            />
                    ))
                }
            </FiveCardWrapper>
            <FiveCardWrapper
                sectionBlockName={'Тихоокеанський регіон'}
                divider={true}>
                {data
                    .filter((news: News) => news.section === 'Тихоокеанський регіон'
                        && new Date(news.publishedAt) <= currentDate)
                    .slice(0, 5)
                    .map((news: News, index: number, array: News[]) => (
                        <NewsCard
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
                            />
                    ))
                }
            </FiveCardWrapper>
            <FiveCardWrapper 
                sectionBlockName={'Африка'}
                divider={false}
                >
                {data
                    .filter((news: News) => news.section === 'Африка'
                        && new Date(news.publishedAt) <= currentDate)
                    .slice(0, 5)
                    .map((news: News, index: number, array: News[]) => (
                        <NewsCard
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
                            />
                    ))
                }
            </FiveCardWrapper>
        </div>
    )
}

export default FiveCardBlock