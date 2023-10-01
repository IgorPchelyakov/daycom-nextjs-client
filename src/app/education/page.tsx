import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Education)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.education.title,
    description: sectionsMeta.education.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.education.title,
        description: sectionsMeta.education.description,
        url: SectionPaths.Education,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Education() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.education.title}
                sectionMetaDescription={sectionsMeta.education.description}
                selectedSection={sectionsMeta.education.section}
                />
        </>
    )
}