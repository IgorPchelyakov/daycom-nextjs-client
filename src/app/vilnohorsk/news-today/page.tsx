import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Вільногірськ стрічка'
    const feed = 'Вільногірськ'
    const link = RegionDniproPaths.vilnohorskNews
    const queryLink = 'https://sside.daycom.online/api/vilnohorsk/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}