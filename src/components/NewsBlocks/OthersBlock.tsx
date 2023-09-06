import { Paths } from '@/data/Paths'
import { News } from '@/types/news'
import Link from 'next/link'
import { currentDate } from '../CurrentDate/dateCheckFunc'
import OthersImg from '../Articles/OthersImg'

async function getData() {
    const res = await fetch('https://sside.daycom.online/api/news')
    return res.json()
}

export default async function OthersBlock() {
    const data = await getData()
    const section = 'Війна Росії проти України';
    const block = 'Стрічка новин';
    const europa = 'Європа';
    const society = 'Суспільство';

    return (
        <>
            <div className='w-[100vw] bg-[#2b2a2a] mt-6 mb-6 text-[#e6e6e6]'>
                <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center">
                    <div className="my-6 gap-4 xl:flex">
                        <div className="mb-4 px-[20px] xl:mb-0 xl:w-[847px] xl:px-0">
                            <div className="mb-6 border-b pb-6">
                                <div className="mb-4">Війна Росії проти України</div>
                                <div className="gap-4 xl:flex">
                                    {data &&
                                            data
                                            .filter((news: News) => {
                                                const publishedTime = new Date(news.publishedAt);
                                                return (
                                                news.section === section &&
                                                publishedTime < currentDate
                                                );
                                            })
                                            .slice(0, 3)
                                            .map((news: News) => (
                                                <>
                                                    <OthersImg
                                                        key={news.id} 
                                                        imgUrl={news.mainImage}
                                                        imgDesc={news.mainImgDesc}
                                                        imgAuthor={news.mainImgAuthor}
                                                        title={news.title}
                                                        url={news.url}
                                                        link={Paths.news}
                                                        articleFeed={news.feed}
                                                        feed={'Загальнонаціональна стрічка'}
                                                    />
                                                </>
                                            ))}
                                </div>
                            </div>
                            <div className="mb-6 border-b pb-6">
                                <div className="mb-4">Європа</div>
                                <div className="gap-4 xl:flex">
                                    {data &&
                                            data
                                            .filter((news: News) => {
                                                const publishedTime = new Date(news.publishedAt);
                                                return (
                                                news.section === europa &&
                                                publishedTime < currentDate
                                                );
                                            })
                                            .slice(0, 3)
                                            .map((news: News) => (
                                                <>
                                                    <OthersImg
                                                        key={news.id} 
                                                        imgUrl={news.mainImage}
                                                        imgDesc={news.mainImgDesc}
                                                        imgAuthor={news.mainImgAuthor}
                                                        title={news.title}
                                                        url={news.url}
                                                        link={Paths.news}
                                                        articleFeed={news.feed}
                                                        feed={'Загальнонаціональна стрічка'}
                                                    />
                                                </>
                                            ))}
                                </div>
                            </div>
                            <div className="mb-6 pb-6">
                                <div className="mb-4">Суспільство</div>
                                <div className="gap-4 xl:flex">
                                    {data &&
                                            data
                                            .filter((news: News) => {
                                                const publishedTime = new Date(news.publishedAt);
                                                return (
                                                news.section === society &&
                                                publishedTime < currentDate
                                                );
                                            })
                                            .slice(0, 3)
                                            .map((news: News) => (
                                                <>
                                                    <OthersImg
                                                        key={news.id} 
                                                        imgUrl={news.mainImage}
                                                        imgDesc={news.mainImgDesc}
                                                        imgAuthor={news.mainImgAuthor}
                                                        title={news.title}
                                                        url={news.url}
                                                        link={Paths.news}
                                                        articleFeed={news.feed}
                                                        feed={'Загальнонаціональна стрічка'}
                                                    />
                                                </>
                                            ))}
                                </div>
                            </div>
                        </div>
                        <div className="border-r"></div>
                        <div className="px-[20px] xl:w-[322px] xl:px-0">
                            <div className="mb-6 border-b pb-6">
                                <Link href={Paths.news} className="underline">
                                Стрічка новин
                                </Link>
                                , останні публікацї
                            </div>
                            {data &&
                                data
                                .filter((news: News) => {
                                    const publishedTime = new Date(news.publishedAt);
                                    return news.block === block && publishedTime < currentDate;
                                })
                                .slice(0, 10)
                                .map((news: News, index: number, array: News[]) => (
                                    <div
                                    key={news.id}
                                    className={`mb-4 ${
                                        index !== array.length - 1 ? 'border-b pb-4' : ''
                                    }`}
                                    >
                                    <Link href={`${Paths.news}/${news.url}`}>
                                        <h2 className="text-[14px] font-light leading-[17px]">
                                        {news.title}
                                        </h2>
                                    </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}