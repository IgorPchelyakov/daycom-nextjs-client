import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Обухів стрічка'
    const feed = 'Обухів'
    const link = RegionKyivPaths.obukhivNews
    const queryLink = 'https://sside.daycom.online/api/obukhiv/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}