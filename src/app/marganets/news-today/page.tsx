import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Марганець стрічка'
    const feed = 'Марганець'
    const link = RegionDniproPaths.marganetsNews
    const queryLink = 'https://sside.daycom.online/api/marganets/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}