import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Біла Церква стрічка'
    const feed = 'Біла Церква'
    const link = RegionKyivPaths.bilacerkvaNews
    const queryLink = 'https://sside.daycom.online/api/bilacerkva/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}