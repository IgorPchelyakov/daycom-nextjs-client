import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.History)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.history.title,
    description: sectionsMeta.history.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.history.title,
        description: sectionsMeta.history.description,
        url: SectionPaths.History,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function History() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.history.title}
                sectionMetaDescription={sectionsMeta.history.description}
                selectedSection={sectionsMeta.history.title}
                />
        </>
    )
}