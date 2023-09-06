import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Вишгород стрічка'
    const feed = 'Вишгород'
    const link = RegionKyivPaths.vyshhorodNews
    const queryLink = 'https://sside.daycom.online/api/vyshhorod/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}