import { FC } from 'react'
import Link from 'next/link';
import { News } from '@/types/news'
import { Paths } from '@/data/Paths';
import { currentDate, is24Hours } from '@/components/CurrentDate/dateCheckFunc';

interface IHeading24Hours {
    data: News[];
    block: string;
    feed: string;
    link: string;
}

const Heading24Hours: FC<IHeading24Hours> = ({
    data,
    block,
    feed,
    link
}) => {

    const headingNews = data.find(
        (news: News) =>
        news.block === block
        && is24Hours(new Date(news.publishedAt))
        && new Date (news.publishedAt) <= currentDate
    )

    if (!headingNews) {
        return null
    }

    const title = headingNews.title
    const isGeneralFeed = headingNews.feed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <>
            <div className="mx-auto mb-7 max-w-[900px] items-center justify-center text-center xl:flex xl:flex-col">
                <Link 
                    href={`${linkTo}/${headingNews.url}`}
                    className="pb-6 text-center text-[24px] font-light leading-[27px] xl:text-[32px] xl:leading-[39px]"
                >
                    {title}
                </Link>
            </div>
        </>
    )
}

export default Heading24Hours