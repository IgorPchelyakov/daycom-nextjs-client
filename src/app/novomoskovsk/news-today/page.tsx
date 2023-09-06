import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Новомосковськ стрічка'
    const feed = 'Новомосковськ'
    const link = RegionDniproPaths.pavlogradNews
    const queryLink = 'https://sside.daycom.online/api/novomoskovsk/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}