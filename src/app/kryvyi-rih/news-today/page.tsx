import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchCityPaths } from "@/data/FetchCityPaths"
import { RegionDniproPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Кривий Ріг стрічка'
    const feed = 'Кривий Ріг'
    const link = RegionDniproPaths.kryvyiRihNews
    const queryLink = fetchCityPaths.KryvyiRihNewsToday
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}