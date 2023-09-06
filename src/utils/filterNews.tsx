import { currentDate } from "@/components/CurrentDate/dateCheckFunc"
import { News } from "@/types/news"

export const filterNewsBySectionAndDate = (news: News[], section: string | undefined) => {
    return news.filter((item: News) => {
        const publishedTime = new Date(item.publishedAt)
        return item.section === section && publishedTime < currentDate
    })
}

export const filterNewsByLineNewsAndDate = (news: News[], feed: string) => {
    return news.filter((item: News) => {
        const publishedTime = new Date(item.publishedAt)
        return item.feed === feed && publishedTime < currentDate
    })
}