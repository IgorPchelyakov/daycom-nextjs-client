import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Interviu)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.interviu.title,
    description: sectionsMeta.interviu.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.interviu.title,
        description: sectionsMeta.interviu.description,
        url: SectionPaths.Interviu,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Interviu() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.interviu.title}
                sectionMetaDescription={sectionsMeta.interviu.description}
                selectedSection={sectionsMeta.interviu.section}
                />
        </>
    )
}