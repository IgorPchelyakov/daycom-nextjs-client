import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import Link from 'next/link';
import { FC } from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ILineNewsOnlyTitle {
    key: string | number;
    index: number;
    array: News[];
    title: string;
    link: string;
    articleFeed: string;
    feed: string;
    url: string;
    publishTime: Date;
}

const LineNewsOnlyTitle: FC<ILineNewsOnlyTitle> = ({
    key,
    index,
    array,
    title,
    link,
    articleFeed,
    feed,
    url,
    publishTime
}) => {
    const isGeneralFeed = articleFeed === feed
    const linkTo = isGeneralFeed ? Paths.news : link

    return (
        <div
          key={key}
          className={`${
            index !== array.length - 1
            ? 'border-b xl:border-b-0 xl:border-r'
            : ''
          } block px-[20px] py-4 xl:w-1/4 xl:px-2`}
          >
          <Link href={`${linkTo}/${url}`} className="block pr-4">
            <h2 className="mb-2 text-[16px] leading-[19px]">
              {title}
            </h2>
            <div className="text-[12px] font-extralight leading-[15px] text-gray-500">
              {dayjs(publishTime).format('DD MMMM YYYY')}
            </div>
          </Link>
        </div>
    )
}

export default LineNewsOnlyTitle