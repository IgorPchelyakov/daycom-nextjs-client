import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchCityPaths } from "@/data/FetchCityPaths"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'П\'ятихатки стрічка'
    const feed = 'П\'ятихатки'
    const link = RegionDniproPaths.pyatihatkyNews
    const queryLink = fetchCityPaths.PyatihatkyNewsToday
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}