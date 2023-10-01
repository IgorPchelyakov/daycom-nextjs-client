import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.PresReliz)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.presReliz.title,
    description: sectionsMeta.presReliz.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.presReliz.title,
        description: sectionsMeta.presReliz.description,
        url: SectionPaths.PresReliz,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function PresReliz() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.presReliz.title}
                sectionMetaDescription={sectionsMeta.presReliz.description}
                selectedSection={sectionsMeta.presReliz.title}
                />
        </>
    )
}