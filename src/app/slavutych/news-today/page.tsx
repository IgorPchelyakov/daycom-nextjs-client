import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Славутич стрічка'
    const feed = 'Славутич'
    const link = RegionKyivPaths.slavutychNews
    const queryLink = 'https://sside.daycom.online/api/slavutych/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}