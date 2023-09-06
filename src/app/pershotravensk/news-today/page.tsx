import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Першотравенськ стрічка'
    const feed = 'Першотравенськ'
    const link = RegionDniproPaths.pershotravenskNews
    const queryLink = 'https://sside.daycom.online/api/pershotravensk/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}