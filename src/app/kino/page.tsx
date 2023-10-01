import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Kino)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.kino.title,
    description: sectionsMeta.kino.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.kino.title,
        description: sectionsMeta.kino.description,
        url: SectionPaths.Kino,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Kino() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.kino.title}
                sectionMetaDescription={sectionsMeta.kino.description}
                selectedSection={sectionsMeta.kino.section}
                />
        </>
    )
}