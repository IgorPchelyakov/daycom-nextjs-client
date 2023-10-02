import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchCityPaths } from "@/data/FetchCityPaths"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Першотравенськ стрічка'
    const feed = 'Першотравенськ'
    const link = RegionDniproPaths.pershotravenskNews
    const queryLink = fetchCityPaths.PershotravenskNewsToday
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}