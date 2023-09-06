import { News } from '@/types/news'
import { FC } from 'react'
import LineNewsOnlyTitle from '../Articles/LineNewsOnlyTitle'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import BlockNameNoImg from '../Articles/BlockNameNoImg'
import LineNewsMiniImgAndTitle from '../Articles/LineNewsMiniImgAndTitle'
import { Paths } from '@/data/Paths'

interface ISinceBlock {
    data: News[]
    link: string
}

const SinceBlock: FC<ISinceBlock> = ({
    data,
    link
}) => {
  return (
    <div className="mx-auto mb-2 mt-7 flex max-w-[1200px] flex-col justify-center">
        <div className="mb-4 gap-4 border-y border-black pb-4 pt-4 xl:flex xl:justify-between">
            {data
                .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                .slice(20, 24)
                .map((news: News, index: number, array: News[]) => (
                    <LineNewsOnlyTitle
                        key={news.id}
                        index={index}
                        array={array}
                        title={news.title}
                        link={link}
                        articleFeed={news.feed}
                        feed={'Загальнонаціональна стрічка'}
                        url={news.url}
                        publishTime={news.publishedAt}
                    />
                ))
            }
        </div>
        <div className="mb-4 gap-4 xl:flex">
            <div className="flex-col xl:w-[830px]">
                <SectionBlockName sectionBlockName={'Наука'}>
                    {data
                        .filter((news: News) => news.section === 'Наука' && new Date(news.publishedAt) <= currentDate)
                        .slice(0, 2)
                        .map((news: News, index: number, array: News[]) => (
                            <BlockNameBigImg
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
                                url={news.url}
                                feed={'Загальнонаціональна стрічка'}
                            />
                        ))
                    }
                    <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                        {data
                            .filter((news: News) => news.section === 'Наука' && new Date(news.publishedAt) <= currentDate)
                            .slice(3, 5)
                            .map((news: News, index: number, array: News[]) => (
                                <BlockNameNoImg
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
                </SectionBlockName>
            </div>
            <div className="xl:border"></div>
            <div className="mt-4 flex-col px-[20px] xl:mt-0 xl:w-[345px] xl:px-0">
                {data
                    .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                    .slice(24, 28)
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
                            link={Paths.news}
                            articleFeed={news.feed}
                            feed={'Загальнонаціональна стрічка'}
                            url={news.url}
                            publishTime={news.publishedAt}
                        />
                    ))
                }
            </div>
        </div>
        <div className="mb-4 gap-4 border-y border-black pb-4 pt-4 xl:flex xl:justify-between">
            {data
                .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                .slice(28, 32)
                .map((news: News, index: number, array: News[]) => (
                    <LineNewsOnlyTitle
                        key={news.id}
                        index={index}
                        array={array}
                        title={news.title}
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
  )
}

export default SinceBlock