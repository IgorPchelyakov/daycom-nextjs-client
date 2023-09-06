import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Дніпро стрічка'
    const feed = 'Дніпро'
    const link = RegionDniproPaths.dniproNews
    const queryLink = 'https://sside.daycom.online/api/dnipro/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}