import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import { Image } from 'antd';
import Link from 'next/link';
import { FC } from 'react'

interface INewsCard {
    key: string | number;
    index: number;
    array: News[];
    imgUrl: string;
    imgDesc: string;
    imgAuthor: string;
    title: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
}

const NewsCard: FC<INewsCard> = ({
    key,
    index,
    array,
    imgUrl,
    imgDesc,
    imgAuthor,
    title,
    link,
    articleFeed,
    feed,
    url,
}) => {
    const isGeneralFeed = articleFeed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <div key={key} className="mb-4 xl:mb-0 xl:max-w-[215px]">
            <Link href={`${linkTo}/${url}`}>
                <Image
                    className="rounded-md object-cover xl:max-h-[145px] 
                        xl:min-h-[145px] xl:min-w-[215px] xl:max-w-[215px]"
                    src={imgUrl}
                    alt={imgDesc}
                    preview={false}
                />
                <h2 className="mt-2 text-[18px] leading-[22px] xl:text-[14px] xl:leading-[16px]">
                    {title}
                </h2>
            </Link>
        </div>
    )
}

export default NewsCard