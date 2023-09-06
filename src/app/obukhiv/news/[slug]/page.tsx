import NewsFree from "@/components/News/NewsFree"
import NewsFreePlus from "@/components/News/NewsFreePlus"
import NewsPremium from "@/components/News/NewsPremium"
import NewsPremiumBlack from "@/components/News/NewsPremiumBlack"
import NewsPremiumWhite from "@/components/News/NewsPremiumWhite"
import { News } from "@/types/news"
import { Metadata } from "next"

type Props = {
    params: {
        slug: string
        id: string | number
    }
}

async function getData(slug: string) {
    const res = await fetch(`https://sside.daycom.online/api/obukhiv/news/${slug}`)
    return res.json()
}

async function getAuthor(id: string) {
    const res = await fetch(`https://sside.daycom.online/api/users/${id}`)
    return res.json()
}

export async function generateMetadata(
    {params: {slug}}: Props
): Promise<Metadata> {
    const data: News = await getData(slug)
    return {
        title: data.title,
        description: data.desc,
        openGraph: {
            title: data.title,
            description: data.desc,
            url: data.url,
            type: 'website',
            locale: 'ua',
            siteName: 'Дейком - Головні новини, України та світу',
            images: [{
                        url: data.mainImage,
                        width: 800,
                        height: 600,
                    }]
            }
    }
}

export default async function News({params: {slug}}: Props) {
    const data: News = await getData(slug)
    const author = await getAuthor(data.UserId)
    const postTypeFree = 'Вільна публікація'
    const postTypeFreePlus = 'Вільна публікація +'
    const postTypePremium = 'Публікація Premium'
    const postTypePremiumWhite = 'Публікація Premium white'
    const postTypePremiumBlack = 'Публікація Premium black'

    if (data) {
        const newsType = data.postType

        if (newsType === postTypeFree) {
            return(
                <>
                    <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center">
                        <NewsFree data={data} author={author} />
                    </div>
                </>
            )
        } else if (newsType === postTypeFreePlus) {
            return (
                <>
                    <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center">
                        <NewsFreePlus data={data} author={author} />
                    </div>
                </>
            )
        } else if (newsType === postTypePremium) {
            return (
                <>
                    <NewsPremium data={data} author={author} />
                </>
            )
        } else if (newsType === postTypePremiumBlack) {
            return (
                <>
                    <NewsPremiumBlack data={data} author={author} />
                </>
            )
        } else if (newsType === postTypePremiumWhite) {
            return (
                <>
                    <NewsPremiumWhite data={data} author={author} />
                </>
            )
        }
    }
}