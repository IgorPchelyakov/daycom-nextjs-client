import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.MiddleEast)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.middleEast.title,
    description: sectionsMeta.middleEast.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.middleEast.title,
        description: sectionsMeta.middleEast.description,
        url: SectionPaths.MiddleEast,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function MiddleEast() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.middleEast.title}
                sectionMetaDescription={sectionsMeta.middleEast.description}
                selectedSection={sectionsMeta.middleEast.title}
                />
        </>
    )
}