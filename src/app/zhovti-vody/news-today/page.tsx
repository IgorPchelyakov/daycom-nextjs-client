import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchCityPaths } from "@/data/FetchCityPaths"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Жовті Води стрічка'
    const feed = 'Жовті Води'
    const link = RegionDniproPaths.zhovtiVodyNews
    const queryLink = fetchCityPaths.ZhovtiVodyNewsToday
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}