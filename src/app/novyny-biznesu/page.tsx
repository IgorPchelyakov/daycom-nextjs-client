import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.NovynyBiznesu)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.novynyBiznesu.title,
    description: sectionsMeta.novynyBiznesu.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.novynyBiznesu.title,
        description: sectionsMeta.novynyBiznesu.description,
        url: SectionPaths.NovynyBiznesu,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function NovynyBiznesu() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.novynyBiznesu.title}
                sectionMetaDescription={sectionsMeta.novynyBiznesu.description}
                selectedSection={sectionsMeta.novynyBiznesu.title}
                />
        </>
    )
}