import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Буча стрічка'
    const feed = 'Буча'
    const link = RegionKyivPaths.buchaNews
    const queryLink = 'https://sside.daycom.online/api/bucha/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}