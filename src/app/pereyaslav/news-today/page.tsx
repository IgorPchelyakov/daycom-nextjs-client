import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Переяслав стрічка'
    const feed = 'Переяслав'
    const link = RegionKyivPaths.pereyaslavNews
    const queryLink = 'https://sside.daycom.online/api/pereyaslav/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}