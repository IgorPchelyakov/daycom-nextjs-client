import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Sport)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.sport.title,
    description: sectionsMeta.sport.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.sport.title,
        description: sectionsMeta.sport.description,
        url: SectionPaths.Sport,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Sport() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.sport.title}
                sectionMetaDescription={sectionsMeta.sport.description}
                selectedSection={sectionsMeta.sport.section}
                />
        </>
    )
}