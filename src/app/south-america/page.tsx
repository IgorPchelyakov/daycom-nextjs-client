import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.SouthAmerica)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.southAmerica.title,
    description: sectionsMeta.southAmerica.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.southAmerica.title,
        description: sectionsMeta.southAmerica.description,
        url: SectionPaths.SouthAmerica,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function SouthAmerica() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.southAmerica.title}
                sectionMetaDescription={sectionsMeta.southAmerica.description}
                selectedSection={sectionsMeta.southAmerica.title}
                />
        </>
    )
}