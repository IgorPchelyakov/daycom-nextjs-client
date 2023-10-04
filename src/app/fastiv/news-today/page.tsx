import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchCityPaths } from "@/data/FetchCityPaths"
import { RegionKyivPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Фастів стрічка'
    const feed = 'Фастів'
    const link = RegionKyivPaths.fastivNews
    const queryLink = fetchCityPaths.FastivNewsToday
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}