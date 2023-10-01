import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Kulinariia)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.kulinariia.title,
    description: sectionsMeta.kulinariia.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.kulinariia.title,
        description: sectionsMeta.kulinariia.description,
        url: SectionPaths.Kulinariia,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Kulinariia() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.kulinariia.title}
                sectionMetaDescription={sectionsMeta.kulinariia.description}
                selectedSection={sectionsMeta.kulinariia.section}
                />
        </>
    )
}