import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Fashion)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.fashion.title,
    description: sectionsMeta.fashion.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.fashion.title,
        description: sectionsMeta.fashion.description,
        url: SectionPaths.Fashion,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Fashion() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.fashion.title}
                sectionMetaDescription={sectionsMeta.fashion.description}
                selectedSection={sectionsMeta.fashion.section}
                />
        </>
    )
}