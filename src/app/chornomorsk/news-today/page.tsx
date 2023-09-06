import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Чорноморськ стрічка'
    const feed = 'Чорноморськ'
    const link = RegionOdesaPaths.chornomorskNews
    const queryLink = 'https://sside.daycom.online/api/chornomorsk/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}