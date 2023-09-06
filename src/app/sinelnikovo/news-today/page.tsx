import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Синельникове стрічка'
    const feed = 'Синельникове'
    const link = RegionDniproPaths.sinelnikovoNews
    const queryLink = 'https://sside.daycom.online/api/sinelnikovo/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}