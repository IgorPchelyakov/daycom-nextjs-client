import { FC } from 'react'
import { News } from '@/types/news';
import { Paths } from '@/data/Paths';
import Link from 'next/link';

interface IMainTodayOnlyTitle {
    key: string | number;
    index: number;
    array: News[];
    title: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
}

const MainTodayOnlyTitle: FC<IMainTodayOnlyTitle> = ({
    key,
    index,
    array,
    title,
    link,
    articleFeed,
    feed,
    url,
}) => {
    const isGeneralFeed = articleFeed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <div key={key}
            className={`${
                index !== array.length - 1
                ? 'border-b xl:border-b-0 xl:border-r'
                : ''
            } block py-4 xl:w-1/4 xl:px-2`}
        >
            <Link href={`${linkTo}/${url}`}>
                <h2 className="text-[18px] leading-[22px] xl:text-[16px] xl:leading-[19px]">
                    {title}
                </h2>
            </Link>
        </div>
    )
}

export default MainTodayOnlyTitle