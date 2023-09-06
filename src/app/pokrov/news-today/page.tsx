import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Покров стрічка'
    const feed = 'Покров'
    const link = RegionDniproPaths.pokrovNews
    const queryLink = 'https://sside.daycom.online/api/pokrov/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}