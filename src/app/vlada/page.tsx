import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Vlada)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.vlada.title,
    description: sectionsMeta.vlada.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.vlada.title,
        description: sectionsMeta.vlada.description,
        url: SectionPaths.Vlada,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Vlada() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.vlada.title}
                sectionMetaDescription={sectionsMeta.vlada.description}
                selectedSection={sectionsMeta.vlada.section}
                />
        </>
    )
}