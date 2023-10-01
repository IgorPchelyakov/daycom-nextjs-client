import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.RealEstate)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.realEstate.title,
    description: sectionsMeta.realEstate.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.realEstate.title,
        description: sectionsMeta.realEstate.description,
        url: SectionPaths.RealEstate,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function RealEstate() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.realEstate.title}
                sectionMetaDescription={sectionsMeta.realEstate.description}
                selectedSection={sectionsMeta.realEstate.title}
                />
        </>
    )
}