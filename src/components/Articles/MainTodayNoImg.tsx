import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import Link from 'next/link';
import { FC } from 'react'

interface IMainTodayNoImg {
    key: string | number;
    index: number;
    array: News[];
    title: string;
    description: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
}

const MainTodayNoImg: FC<IMainTodayNoImg> = ({
    key,
    index,
    array,
    title,
    description,
    link,
    articleFeed,
    feed,
    url,
}) => {
    const isGeneralFeed = articleFeed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <div key={key} className={index !== array.length - 1 ? 'mb-4 pb-4 border-b' : ''}>
            <Link href={`${linkTo}/${url}`}>
                <h2 className="mb-3 text-[19px] leading-[23px] xl:text-[20px] xl:leading-[24px]">
                    {title}
                </h2>
                <p className="text-[13px] font-light leading-[16px] text-gray-500">
                    {description}
                </p>
            </Link>
        </div>
    )
}

export default MainTodayNoImg