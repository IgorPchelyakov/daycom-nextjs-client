import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Березань стрічка'
    const feed = 'Березань'
    const link = RegionKyivPaths.berezanNews
    const queryLink = 'https://sside.daycom.online/api/berezan/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}