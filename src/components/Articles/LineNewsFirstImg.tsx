import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import { Image } from 'antd';
import Link from 'next/link'
import { FC } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ILineNewsFirstImg {
    key: string | number;
    index: number;
    array: News[];
    imgUrl: string;
    imgDesc: string;
    imgAuthor: string;
    title: string;
    description?: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
    publishTime: Date
}

const LineNewsFirstImg: FC<ILineNewsFirstImg> = ({
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
                className={`mb-4 block pb-4 ${
                    index === array.length - 1
                    ? 'border-b border-black'
                    : 'border-b'
                }`}
            >
                    {index === 0 && (
                        <div className="mb-3">
                        <Image
                            className="rounded-md object-cover xl:max-h-[230px] 
                                xl:min-h-[230px] xl:min-w-[345px] xl:max-w-[345px]"
                            src={imgUrl}
                            alt={imgDesc}
                            preview={false}
                        />
                            <figcaption className="px-[20px] text-right text-[12px] font-light leading-[15px] text-gray-500 xl:px-0">
                                {imgAuthor}
                            </figcaption>
                        </div>
                    )}
                    <div className="xl:px-2">
                        <h2 className="mb-3 text-[16px] font-light leading-[19px]">
                            {title}
                        </h2>
                        <p className="mb-3 text-[13px] font-light leading-[16px] text-gray-500">
                            {description}
                        </p>
                        <div className="text-[12px] font-extralight leading-[15px] text-gray-500">
                            {dayjs(publishTime).format('DD MMMM YYYY')}
                        </div>
                    </div>
            </Link>
        </div>
    )
}

export default LineNewsFirstImg