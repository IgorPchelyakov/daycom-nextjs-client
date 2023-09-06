import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Боярка стрічка'
    const feed = 'Боярка'
    const link = RegionKyivPaths.boyarkaNews
    const queryLink = 'https://sside.daycom.online/api/boyarka/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}