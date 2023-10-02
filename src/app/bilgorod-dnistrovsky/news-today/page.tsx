import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { fetchCityPaths } from "@/data/FetchCityPaths"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Білгород-Дністровський стрічка'
    const feed = 'Білгород-Дністровський'
    const link = RegionOdesaPaths.bilgorodDnistrovskyNews
    const queryLink = fetchCityPaths.BilgorodDnistrovskyNewsToday
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}