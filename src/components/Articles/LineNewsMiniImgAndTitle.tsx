import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import { Image } from 'antd';
import Link from 'next/link';
import { FC } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ILineNewsMiniImgAndTitle {
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
const LineNewsMiniImgAndTitle: FC<ILineNewsMiniImgAndTitle> = ({
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
        <div key={key}>
            <Link
                href={`${linkTo}/${url}`}
                className="mb-4 block border-b pb-4"
            >
                <div className="flex gap-2">
                    <div className="xl:max-w-[255px] xl:px-2">
                        <h2 className="mb-3 text-[16px] font-light leading-[19px]">
                            {title}
                        </h2>
                        <div className="text-[12px] font-extralight leading-[15px] text-gray-500">
                            {dayjs(publishTime).format('DD MMMM YYYY')}
                        </div>
                    </div>
                    <Image
                        className="max-h-[80px] min-h-[80px] min-w-[80px]
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

export default LineNewsMiniImgAndTitle