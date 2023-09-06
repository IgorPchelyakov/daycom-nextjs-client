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
    title: sectionsMeta.polityka.title,
    description: sectionsMeta.polityka.description,
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: sectionsMeta.polityka.title,
        description: sectionsMeta.polityka.description,
        url: SectionPaths.Polityka,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

export default async function Polityka() {
    const data: News[] = await getData()
    const link = Paths.news

    return (
        <>
            <SectionBlock 
                data={data}
                link={link}
                sectionMetaTitle={sectionsMeta.polityka.title}
                sectionMetaDescription={sectionsMeta.polityka.description}
                selectedSection={sectionsMeta.polityka.section}
                />
        </>
    )
}