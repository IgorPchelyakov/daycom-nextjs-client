import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Жовті Води стрічка'
    const feed = 'Жовті Води'
    const link = RegionDniproPaths.zhovtiVodyNews
    const queryLink = 'https://sside.daycom.online/api/zhovti-vody/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}