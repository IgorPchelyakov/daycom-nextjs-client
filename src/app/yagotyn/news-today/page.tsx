import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Яготин стрічка'
    const feed = 'Яготин'
    const link = RegionKyivPaths.yagotynNews
    const queryLink = 'https://sside.daycom.online/api/yagotyn/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}