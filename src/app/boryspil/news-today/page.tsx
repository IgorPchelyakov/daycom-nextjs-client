import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Бориспіль стрічка'
    const feed = 'Бориспіль'
    const link = RegionKyivPaths.boryspilNews
    const queryLink = 'https://sside.daycom.online/api/boryspil/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}