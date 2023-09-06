import { News } from "@/types/news";
import { Metadata } from "next";

type Props = {
    params: {
        slug: string
    }
}

export async function getData(slug: string) {
    const res = await fetch(`https://sside.daycom.online/api/news/${slug}`);
    return res.json();
}

export async function getAuthor(id: string | number) {
    const res = await fetch(`https://sside.daycom.online/api/users/${id}`);
    return res.json();
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
    const data: News = await getData(slug);
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
        images: [
          {
            url: data.mainImage,
            width: 800,
            height: 600,
          },
        ],
      },
    };
}