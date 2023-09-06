import { News } from "@/types/news"

export const renderSection = (sectionData: News[], Component: React.FC<any>, link: string, showSection: boolean) => {
    return sectionData.map((news: News, index: number, array: News[]) => (
        <Component
            key={news.id}
            index={index}
            array={array}
            link={link}
            url={news.url}
            imgUrl={news.mainImage}
            imgDesc={news.mainImgDesc}
            imgAuthor={news.mainImgAuthor}
            title={news.title}
            description={news.desc}
            publishDate={news.publishedAt}
            section={news.section}
            showSection={showSection}
        />
    ))
}