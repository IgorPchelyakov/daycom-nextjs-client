import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Павлоград стрічка'
    const feed = 'Павлоград'
    const link = RegionDniproPaths.pavlogradNews
    const queryLink = 'https://sside.daycom.online/api/pavlograd/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}