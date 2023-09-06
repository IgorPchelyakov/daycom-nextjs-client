import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { Paths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Загальнонаціональна стрічка'
    const feed = 'Загальнонаціональна стрічка'
    const link = Paths.news
    const queryLink = 'https://sside.daycom.online/api/news/news-today'

    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}