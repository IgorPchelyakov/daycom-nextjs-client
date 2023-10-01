import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.PacificRegion)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.pacificRegion.title,
    description: sectionsMeta.pacificRegion.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.pacificRegion.title,
        description: sectionsMeta.pacificRegion.description,
        url: SectionPaths.PacificRegion,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function PacificRegion() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.pacificRegion.title}
                sectionMetaDescription={sectionsMeta.pacificRegion.description}
                selectedSection={sectionsMeta.pacificRegion.title}
                />
        </>
    )
}