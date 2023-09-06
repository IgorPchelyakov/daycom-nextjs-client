import { Paths } from '@/data/Paths';
import { News } from '@/types/news';
import { Image } from 'antd';
import Link from 'next/link';
import { FC } from 'react'

interface IMainTodayImgAndTitle {
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

const MainTodayImgAndTitle: FC<IMainTodayImgAndTitle> = ({
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
      <div
        key={key}
        className={`${
          index !== array.length - 1
          ? 'border-b pb-4'
          : ''
        }`}
      >
        {index === 0 ? (
          <Link href={`${linkTo}/${url}`}>
            <Image
              className="rounded-md object-cover xl:max-h-[230px] xl:min-h-[230px] xl:min-w-[345px] xl:max-w-[345px]"
              src={imgUrl}
              alt={imgDesc}
              preview={false}
            />
            <figcaption className="text-right text-[10px] font-light text-gray-500">
              {imgAuthor}
            </figcaption>
            <h2 className="text-[18px] leading-[22px] xl:text-[16px] xl:leading-[19px]">
              {title}
            </h2>
          </Link>
        ) : (
          <Link href={`${linkTo}/${url}`} className="block pt-4">
            <h2 className="text-[18px] leading-[22px] xl:text-[16px] xl:leading-[19px]">
              {title}
            </h2>
          </Link>
        )}
      </div>
    )
}

export default MainTodayImgAndTitle