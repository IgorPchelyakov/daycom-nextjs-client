import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Kultura)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.kultura.title,
    description: sectionsMeta.kultura.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.kultura.title,
        description: sectionsMeta.kultura.description,
        url: SectionPaths.Kultura,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Kultura() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.kultura.title}
                sectionMetaDescription={sectionsMeta.kultura.description}
                selectedSection={sectionsMeta.kultura.section}
                />
        </>
    )
}