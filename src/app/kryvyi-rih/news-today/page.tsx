import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Кривий Ріг стрічка'
    const feed = 'Кривий Ріг'
    const link = RegionDniproPaths.kryvyiRihNews
    const queryLink = 'https://sside.daycom.online/api/kryvyi-rih/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}