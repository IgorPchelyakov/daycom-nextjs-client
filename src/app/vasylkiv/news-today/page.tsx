import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Васильків стрічка'
    const feed = 'Васильків'
    const link = RegionKyivPaths.vasylkivNews
    const queryLink = 'https://sside.daycom.online/api/vasylkiv/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}