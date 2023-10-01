import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Health)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.health.title,
    description: sectionsMeta.health.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.health.title,
        description: sectionsMeta.health.description,
        url: SectionPaths.Health,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Health() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.health.title}
                sectionMetaDescription={sectionsMeta.health.description}
                selectedSection={sectionsMeta.health.section}
                />
        </>
    )
}