import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Suspilstvo)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.suspilstvo.title,
    description: sectionsMeta.suspilstvo.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.suspilstvo.title,
        description: sectionsMeta.suspilstvo.description,
        url: SectionPaths.Suspilstvo,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Suspilstvo() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.suspilstvo.title}
                sectionMetaDescription={sectionsMeta.suspilstvo.description}
                selectedSection={sectionsMeta.suspilstvo.title}
                />
        </>
    )
}