import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.USA)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.usa.title,
    description: sectionsMeta.usa.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.usa.title,
        description: sectionsMeta.usa.description,
        url: SectionPaths.USA,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Usa() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.usa.title}
                sectionMetaDescription={sectionsMeta.usa.description}
                selectedSection={sectionsMeta.usa.title}
                />
        </>
    )
}