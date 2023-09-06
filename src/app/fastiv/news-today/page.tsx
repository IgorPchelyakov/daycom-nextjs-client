import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Фастів стрічка'
    const feed = 'Фастів'
    const link = RegionKyivPaths.fastivNews
    const queryLink = 'https://sside.daycom.online/api/fastiv/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}