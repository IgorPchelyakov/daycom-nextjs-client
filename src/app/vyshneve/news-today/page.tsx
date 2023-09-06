import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Вишневе стрічка'
    const feed = 'Вишневе'
    const link = RegionKyivPaths.vyshneveNews
    const queryLink = 'https://sside.daycom.online/api/vyshneve/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}