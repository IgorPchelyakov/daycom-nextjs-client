import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.Vijna)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.vijna.title,
    description: sectionsMeta.vijna.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.vijna.title,
        description: sectionsMeta.vijna.description,
        url: SectionPaths.Vijna,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Vijna() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.vijna.title}
                sectionMetaDescription={sectionsMeta.vijna.description}
                selectedSection={sectionsMeta.vijna.title}
                />
        </>
    )
}