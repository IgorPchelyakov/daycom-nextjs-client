import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchNews } from "@/data/FetchsNews"
import { Paths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Загальнонаціональна стрічка'
    const feed = 'Загальнонаціональна стрічка'
    const link = Paths.news
    const queryLink = fetchNews.newsToday

    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}