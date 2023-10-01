import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { fetchSectionData } from "@/data/FetchSectionDataPaths"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(fetchSectionData.SvitoviNovyny)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.svitoviNovyny.title,
    description: sectionsMeta.svitoviNovyny.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.svitoviNovyny.title,
        description: sectionsMeta.svitoviNovyny.description,
        url: SectionPaths.SvitoviNovyny,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function SvitoviNovyny() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.svitoviNovyny.title}
                sectionMetaDescription={sectionsMeta.svitoviNovyny.description}
                selectedSection={sectionsMeta.svitoviNovyny.title}
                />
        </>
    )
}