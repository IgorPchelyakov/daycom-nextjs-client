import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Ізмаїл стрічка'
    const feed = 'Ізмаїл'
    const link = RegionOdesaPaths.izmailNews
    const queryLink = 'https://sside.daycom.online/api/izmail/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}