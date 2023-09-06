import { Paths } from '@/data/Paths';
import { Image } from 'antd';
import Link from 'next/link';
import React, { FC } from 'react'

interface IOthersImg {
    key: string | number;
    imgUrl: string;
    imgDesc: string;
    imgAuthor: string;
    title: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
}

const OthersImg: FC<IOthersImg> = ({
    key,
    imgUrl,
    imgDesc,
    title,
    link,
    articleFeed,
    feed,
    url,
}) => {
    const isGeneralFeed = articleFeed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <div
            key={key}
            className="mb-8 xl:mb-0 xl:max-w-[270px]"
            >
                <Link href={`${linkTo}/${url}`}>
                    <Image
                        src={imgUrl}
                        alt={imgDesc}
                        className="rounded-md object-cover xl:max-h-[180px] xl:min-h-[180px] xl:min-w-[270px] xl:max-w-[270px]"
                        preview={false}
                    />
                    <h2 className="pt-2 text-[16px] font-light leading-[19px]">
                        {title}
                    </h2>
                </Link>
        </div>
    )
}

export default OthersImg