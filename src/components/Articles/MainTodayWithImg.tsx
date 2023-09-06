import { FC } from 'react'
import Link from 'next/link';
import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import { Image } from 'antd';

interface IMainTodayWithImg {
    key: string | number;
    index: number;
    array: News[];
    imgUrl: string;
    imgDesc: string;
    imgAuthor: string;
    title: string;
    description: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
}

const MainTodayWithImg: FC<IMainTodayWithImg> = ({
    key,
    index,
    array,
    imgUrl,
    imgDesc,
    imgAuthor,
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
        <div key={key}>
            <Link href={`${linkTo}/${url}`}
                className="block border-b pb-4 xl:border-none xl:pb-0"
            >
                <div className="mx-[-20px] mb-3 text-right xl:mx-0">
                    <Image
                        className="min-h-[400px] min-w-[320px] object-cover xl:max-h-[350px]
                            xl:min-h-[350px] xl:min-w-[512px] xl:max-w-[512px] xl:rounded-md" 
                        src={imgUrl} 
                        alt={imgDesc}
                        preview={false}
                    />
                    <figcaption className="px-[20px] text-[10px] font-light leading-[12px] text-gray-500 xl:px-0">
                        {imgAuthor}
                    </figcaption>
                </div>
                <div className="xl:px-3">
                    <h2 className="mb-3 text-[19px] leading-[23px] xl:text-[20px] xl:leading-[24px]">
                        {title}
                    </h2>
                    <p className="text-[13px] font-light leading-[16px] text-gray-500">
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default MainTodayWithImg