import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Traveling)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.traveling.title,
    description: sectionsMeta.traveling.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.traveling.title,
        description: sectionsMeta.traveling.description,
        url: SectionPaths.Traveling,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Traveling() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.traveling.title}
                sectionMetaDescription={sectionsMeta.traveling.description}
                selectedSection={sectionsMeta.traveling.title}
                />
        </>
    )
}