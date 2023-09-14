import { currentDate } from "@/components/CurrentDate/dateCheckFunc"
import { News } from "@/types/news"

export const renderArticlesSection = (
    data: News[],
    sliceStart: number,
    sliceEnd: number,
    Component: React.FC<any>,
    selectedFeed: string,
    link: string,
    sectionName1: string,
    sectionName2?: string,
    sectionName3?: string
) => {
    
    return data
        .filter((news: News) => {
            return (
                (news.section === sectionName1 ||
                 news.section === sectionName2 ||
                 news.section === sectionName3) &&
                new Date(news.publishedAt) <= currentDate
            )
        })
        .slice(sliceStart, sliceEnd)
        .map((news: News, index: number, array: News[]) => {
            return (
                <Component
                    key={news.id}
                    index={index}
                    array={array}
                    feed={selectedFeed}
                    link={link}
                    title={news.title}
                    description={news.desc}
                    imgUrl={news.mainImage}
                    imgDesc={news.mainImgDesc}
                    imgAuthor={news.mainImgAuthor}
                    articleFeed={news.feed}
                    url={news.url}
                />
                )
            })
}