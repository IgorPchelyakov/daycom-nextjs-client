import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Ofitsijno)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.ofitsijno.title,
    description: sectionsMeta.ofitsijno.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.ofitsijno.title,
        description: sectionsMeta.ofitsijno.description,
        url: SectionPaths.Ofitsijno,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Ofitsijno() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.ofitsijno.title}
                sectionMetaDescription={sectionsMeta.ofitsijno.description}
                selectedSection={sectionsMeta.ofitsijno.title}
                />
        </>
    )
}