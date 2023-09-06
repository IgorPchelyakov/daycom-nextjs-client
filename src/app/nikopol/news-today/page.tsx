import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Нікополь стрічка'
    const feed = 'Нікополь'
    const link = RegionDniproPaths.pavlogradNews
    const queryLink = 'https://sside.daycom.online/api/nikopol/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}