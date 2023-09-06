import SectionBlock from "@/components/SectionBlocks/SectionBlock"
import { Paths, SectionPaths } from "@/data/Paths"
import { sectionsMeta } from "@/data/SectionsMeta"
import { News } from "@/types/news"
import { Metadata } from "next"


async function getData() {
    const res = await fetch(`https://sside.daycom.online/api/news`)
    return res.json()
}

export const metadata: Metadata = {
    title: sectionsMeta.northAmerica.title,
    description: sectionsMeta.northAmerica.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.northAmerica.title,
        description: sectionsMeta.northAmerica.description,
        url: SectionPaths.NorthAmerica,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function NorthAmerica() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.northAmerica.title}
                sectionMetaDescription={sectionsMeta.northAmerica.description}
                selectedSection={sectionsMeta.northAmerica.title}
                />
        </>
    )
}