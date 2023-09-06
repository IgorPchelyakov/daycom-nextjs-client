import TodayNewspaper from "@/components/TodayNewspaper/TodayNewspaper"
import { RegionOdesaPaths } from "@/data/Paths"

export default async function NewsToday() {
    const feedTitle = 'Білгород-Дністровський стрічка'
    const feed = 'Білгород-Дністровський'
    const link = RegionOdesaPaths.bilgorodDnistrovskyNews
    const queryLink = 'https://sside.daycom.online/api/bilgorod-dnistrovsky/news/news-today'
    
    return (
        <>
            <TodayNewspaper feedTitle={feedTitle} feed={feed} link={link} queryLink={queryLink} />
        </>
    )
}