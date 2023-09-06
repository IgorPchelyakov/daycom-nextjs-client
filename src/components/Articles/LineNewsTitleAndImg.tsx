import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import Link from 'next/link';
import { FC } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
import { Image } from 'antd';
dayjs.extend(localeData);

interface ILineNewsTitleAndImg {
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
    publishTime: Date
}

const LineNewsTitleAndImg: FC<ILineNewsTitleAndImg> = ({
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
    publishTime
}) => {
    const isGeneralFeed = articleFeed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <div key={key} className="mb-4 pb-4 xl:w-1/3">
            <Link href={`${linkTo}/${url}`}>
                <div className="flex justify-between px-[20px] xl:mx-4 xl:px-0">
                    <div className="pr-2 xl:max-w-[255px] xl:px-2">
                        <h2 className="mb-3 text-[16px] font-light leading-[19px]">
                            {title}
                        </h2>
                        <div className="text-[12px] font-extralight leading-[15px] text-gray-500">
                            {dayjs(publishTime).format('DD MMMM YYYY')}
                        </div>
                    </div>
                    <Image
                        className="ml-4 max-h-[80px] min-h-[80px] min-w-[80px] 
                            max-w-[80px] rounded-md object-cover"
                        src={imgUrl}
                        alt={imgDesc}
                        preview={false}
                    />
                </div>
            </Link>
        </div>
    )
}

export default LineNewsTitleAndImg