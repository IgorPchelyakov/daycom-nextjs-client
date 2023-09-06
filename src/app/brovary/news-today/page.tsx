import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Бровари стрічка'
    const feed = 'Бровари'
    const link = RegionKyivPaths.brovaryNews
    const queryLink = 'https://sside.daycom.online/api/brovary/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}