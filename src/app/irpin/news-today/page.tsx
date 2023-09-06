import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Ірпінь стрічка'
    const feed = 'Ірпінь'
    const link = RegionKyivPaths.irpinNews
    const queryLink = 'https://sside.daycom.online/api/irpin/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}