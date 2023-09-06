import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Одеса стрічка'
    const feed = 'Одеса'
    const link = RegionOdesaPaths.bilgorodDnistrovskyNews
    const queryLink = 'https://sside.daycom.online/api/odesa/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}