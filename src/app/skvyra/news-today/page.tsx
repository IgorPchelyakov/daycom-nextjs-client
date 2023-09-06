import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Сквира стрічка'
    const feed = 'Сквира'
    const link = RegionKyivPaths.skvyraNews
    const queryLink = 'https://sside.daycom.online/api/skvyra/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}