import { News } from '@/types/news'
import { FC } from 'react'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import { Paths } from '@/data/Paths'
import SectionBlockNameSMImg from '../Articles/SectionBlockNameSMImg'
import BlockNameNoImg from '../Articles/BlockNameNoImg'
import NewsCarousel from '../Carousels/NewsCarousel'
import SectionNewsCarousel from '../Articles/SectionNewsCarousel'
import LineNewsBlock from './LineNewsBlock'

interface ISectionsBlock {
    data: News[]
    link: string
    pathToNews: string
    pathToNewsToday: string
}

const SectionsBlock: FC<ISectionsBlock> = ({
    data,
    link,
    pathToNews,
    pathToNewsToday
}) => {
    return (
        <div className="mx-auto mb-6 mt-6 gap-4 xl:flex xl:max-w-[1200px]">
            <div>
                <SectionBlockName 
                    sectionBlockName={'Війна Росії проти України'}
                >
                    {data
                        .filter((news: News) => news.section === 'Війна Росії проти України' && new Date(news.publishedAt) <= currentDate)
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
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                            />
                        ))
                    }
                    {data
                        .filter((news: News) => news.section === 'Війна Росії проти України' && new Date(news.publishedAt) <= currentDate)
                        .slice(2, 3)
                        .map((news: News, index: number, array: News[]) => (
                            <SectionBlockNameSMImg 
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
                            />
                        ))
                    }
                    <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                        {data
                            .filter((news: News) => news.section === 'Війна Росії проти України' && new Date(news.publishedAt) <= currentDate)
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
                <SectionBlockName sectionBlockName={'Суспільство'}>
                    {data
                        .filter((news: News) => news.section === 'Суспільство' && new Date(news.publishedAt) <= currentDate)
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
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                            />
                        ))
                    }
                    <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                        {data
                            .filter((news: News) => news.section === 'Суспільство' && new Date(news.publishedAt) <= currentDate)
                            .slice(2, 4)
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
                <SectionBlockName sectionBlockName={'Європа'}>
                    {data
                        .filter((news: News) => news.section === 'Європа' && new Date(news.publishedAt) <= currentDate)
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
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                            />
                        ))
                    }
                    <div className="rounded-md border max-h-[258px] mb-4">
                        <NewsCarousel
                            blockTitle={''}
                            slidesToShowStart={1}
                            slidesToShowEnd={1}
                            slidesToScrollStart={1}
                            slidesToScrollEnd={1}
                        >
                            <SectionNewsCarousel
                                data={data}
                                blockName={'Європа'}
                                sliceStart={2}
                                sliceEnd={10}
                                link={Paths.news}
                            />
                        </NewsCarousel>
                    </div>
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Китай'}>
                {data
                        .filter((news: News) => news.section === 'Китай' && new Date(news.publishedAt) <= currentDate)
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
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                            />
                        ))
                    }
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Сполучені Штати'}>
                    {data
                        .filter((news: News) => news.section === 'Сполучені Штати' && new Date(news.publishedAt) <= currentDate)
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
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                            />
                        ))
                    }
                    {data
                        .filter((news: News) => news.section === 'Сполучені Штати' && new Date(news.publishedAt) <= currentDate)
                        .slice(2, 3)
                        .map((news: News, index: number, array: News[]) => (
                            <SectionBlockNameSMImg 
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
                            />
                        ))
                    }
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Економіка та Фінанси'}>
                    {data
                        .filter((news: News) => news.section === 'Економіка' || 
                            news.section === 'Фінанси' && new Date(news.publishedAt) <= currentDate)
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
                                feed={'Загальнонаціональна стрічка'}
                                url={news.url}
                            />
                        ))
                    }
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Технології'}>
                    {data
                        .filter((news: News) => news.section === 'Технології' && new Date(news.publishedAt) <= currentDate)
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
                    <div className="rounded-md border max-h-[258px] mb-4">
                        <NewsCarousel
                            blockTitle={''}
                            slidesToShowStart={1}
                            slidesToShowEnd={1}
                            slidesToScrollStart={1}
                            slidesToScrollEnd={1}
                        >
                            <SectionNewsCarousel
                                data={data}
                                blockName={'Технології'}
                                sliceStart={2}
                                sliceEnd={10}
                                link={Paths.news}
                            />
                        </NewsCarousel>
                    </div>
                </SectionBlockName>
            </div>
            <div className="xl:border"></div>
            <LineNewsBlock data={data} pathToNews={pathToNews} pathToNewsToday={pathToNewsToday} link={link} />
        </div>
    )
}

export default SectionsBlock