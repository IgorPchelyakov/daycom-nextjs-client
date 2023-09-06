import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Київ стрічка'
    const feed = 'Київ'
    const link = RegionKyivPaths.kyivNews
    const queryLink = 'https://sside.daycom.online/api/kyiv/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}