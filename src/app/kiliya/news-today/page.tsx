import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Кілія стрічка'
    const feed = 'Кілія'
    const link = RegionOdesaPaths.kiliyaNews
    const queryLink = 'https://sside.daycom.online/api/kiliya/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}