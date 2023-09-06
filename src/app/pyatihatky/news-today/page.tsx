import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'П\'ятихатки стрічка'
    const feed = 'П\'ятихатки'
    const link = RegionDniproPaths.pyatihatkyNews
    const queryLink = 'https://sside.daycom.online/api/pyatihatky/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}