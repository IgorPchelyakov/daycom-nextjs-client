import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Biznes)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.biznes.title,
    description: sectionsMeta.biznes.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.biznes.title,
        description: sectionsMeta.biznes.description,
        url: SectionPaths.Biznes,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Biznes() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.biznes.title}
                sectionMetaDescription={sectionsMeta.biznes.description}
                selectedSection={sectionsMeta.biznes.section}
                />
        </>
    )
}