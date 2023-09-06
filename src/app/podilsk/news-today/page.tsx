import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Подільськ стрічка'
    const feed = 'Подільськ'
    const link = RegionOdesaPaths.podilskNews
    const queryLink = 'https://sside.daycom.online/api/podilsk/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}