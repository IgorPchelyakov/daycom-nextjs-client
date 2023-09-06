import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Южне стрічка'
    const feed = 'Южне'
    const link = RegionOdesaPaths.podilskNews
    const queryLink = 'https://sside.daycom.online/api/youzhne/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}