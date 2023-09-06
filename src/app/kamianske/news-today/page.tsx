import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Кам\'янське стрічка'
    const feed = 'Кам\'янське'
    const link = RegionDniproPaths.kamianskeNews
    const queryLink = 'https://sside.daycom.online/api/kamianske/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}