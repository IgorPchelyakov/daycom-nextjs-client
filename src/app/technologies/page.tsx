import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Technologies)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.technologies.title,
    description: sectionsMeta.technologies.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.technologies.title,
        description: sectionsMeta.technologies.description,
        url: SectionPaths.Technologies,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Technologies() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.technologies.title}
                sectionMetaDescription={sectionsMeta.technologies.description}
                selectedSection={sectionsMeta.technologies.section}
                />
        </>
    )
}