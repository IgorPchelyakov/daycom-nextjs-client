import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Ekonomika)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.ekonomika.title,
    description: sectionsMeta.ekonomika.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.ekonomika.title,
        description: sectionsMeta.ekonomika.description,
        url: SectionPaths.Ekonomika,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Ekonomika() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.ekonomika.title}
                sectionMetaDescription={sectionsMeta.ekonomika.description}
                selectedSection={sectionsMeta.ekonomika.section}
                />
        </>
    )
}