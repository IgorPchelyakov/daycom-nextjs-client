import { News } from '@/types/news'
import { FC } from 'react'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import BlockNameNoImg from '../Articles/BlockNameNoImg'
import LineNewsFirstImg from '../Articles/LineNewsFirstImg'

interface ISportBlock {
    data: News[]
    link: string
}

const SportBlock: FC<ISportBlock> = ({
    data,
    link
}) => {
    return (
        <div className="mx-auto flex-col justify-center xl:flex xl:max-w-[1200px]">
            <div className="mb-6 gap-4 xl:flex">
                <div className="flex-col xl:w-[830px]">
                    <SectionBlockName sectionBlockName={'Спорт'}>
                        {data
                            .filter((news: News) => news.section === 'Спорт' && new Date(news.publishedAt) <= currentDate)
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
                                .filter((news: News) => news.section === 'Спорт' && new Date(news.publishedAt) <= currentDate)
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
                </div>
                <div className="xl:border"></div>
                <div className="mt-4 flex-col px-[20px] xl:mt-0 xl:w-[345px] xl:px-0">
                    {data
                        .filter((news: News) => news.block === 'Стрічка новин' && new Date(news.publishedAt) <= currentDate)
                        .slice(41, 46)
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
                </div>
            </div>
        </div>
    )
}

export default SportBlock