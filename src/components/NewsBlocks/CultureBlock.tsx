import { News } from '@/types/news'
import { FC } from 'react'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import { Paths } from '@/data/Paths'
import LineNewsFirstImg from '../Articles/LineNewsFirstImg'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import NewsCarousel from '../Carousels/NewsCarousel'
import SectionNewsCarousel from '../Articles/SectionNewsCarousel'

interface ICultureBlock {
    data: News[]
    link: string
}

const CultureBlock: FC<ICultureBlock> = ({
    data,
    link
}) => {
    return (
        <div className="mx-auto mb-2 mt-7 flex max-w-[1200px] flex-col justify-center">
            <div className="mb-4 gap-4 xl:flex">
                <div className="flex-col xl:w-[824px]">
                    <SectionBlockName sectionBlockName={'Культура, музика та кіно'}>
                        {data
                            .filter((news: News) => news.section === 'Культура' ||
                                news.section === 'Музика' ||
                                (news.section === 'Кіно'
                                && new Date(news.publishedAt) <= currentDate))
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
                                blockName={'Культура'}
                                blockName2={'Музика'}
                                blockName3={'Кіно'}
                                sliceStart={2}
                                sliceEnd={10}
                                link={Paths.news}
                            />
                        </NewsCarousel>
                    </div>
                    </SectionBlockName>
                </div>
                <div className="xl:border"></div>
                <div className="mt-4 flex-col px-[20px] xl:mt-0 xl:w-[345px] xl:px-0">
                    {data
                        .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                        .slice(32, 35)
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
        </div>
    )
}

export default CultureBlock