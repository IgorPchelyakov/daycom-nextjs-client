import LineNewsBlock from "@/components/LineNewsBlocks/LineNewsBlock"
import { RegionOdesaPaths } from "@/data/Paths"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(`https://sside.daycom.online/api/youzhne/news`)
    return res.json()
}

export const metadata: Metadata = {
    title: 'Стрічка новин',
    description: 'Головні новини в прямому ефірі, розслідування, думки, фотографії та відео журналістів з багатьох країн світу. Ми висвітлюємо українські та міжнародні новини, серед яких: політика, бізнес, технології, наука, здоров\'я, мистецтво, спорт, та інші події з багатьої куточків світу.',
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: 'Стрічка новин',
        description: 'Головні новини в прямому ефірі, розслідування, думки, фотографії та відео журналістів з багатьох країн світу. Ми висвітлюємо українські та міжнародні новини, серед яких: політика, бізнес, технології, наука, здоров\'я, мистецтво, спорт, та інші події з багатьої куточків світу.',
        url: RegionOdesaPaths.youzhneNews,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function LineNews() {
    const data: News[] = await getData()
    const link = RegionOdesaPaths.youzhneNews
    const selectedFeed = 'Подільськ'
    const feedTitle = 'Подільськ стрічка'

    return (
        <>
            <LineNewsBlock
                data={data}
                link={link}
                selectedFeed={selectedFeed}
                feedTitle={feedTitle}
            />
        </>
    )
}