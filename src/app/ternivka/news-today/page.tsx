import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Тернівка стрічка'
    const feed = 'Тернівка'
    const link = RegionDniproPaths.ternivkaNews
    const queryLink = 'https://sside.daycom.online/api/ternivka/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}