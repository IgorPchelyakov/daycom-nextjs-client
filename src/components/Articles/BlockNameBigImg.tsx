import { FC } from 'react'
import { News } from '@/types/news'
import { Image } from 'antd';
import Link from 'next/link';
import { Paths } from '@/data/Paths';

interface IBlockNameBigImg {
    key: string | number
    index: number
    array: News[]
    imgUrl: string
    imgDesc: string
    imgAuthor: string
    title: string
    description: string
    link: string
    articleFeed: string
    feed: string
    url: string
}

const BlockNameBigImg: FC<IBlockNameBigImg> = ({
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
            <Link
                href={`${linkTo}/${url}`}
                className={`mb-4 block min-w-[288px] xl:min-h-[170px] xl:max-w-[288px] ${
                index === array.length - 1 ? '' : 'border-b'
                }`}
            >
                <div className="px-[20px] xl:px-0">
                    <h2 className="relative mb-4 text-[18px] leading-[22px] xl:text-[16px] xl:leading-[19px]">
                        {title}
                    </h2>
                    <p className="mb-4 text-[13px] font-light leading-[16px] text-gray-500">
                        {description}
                    </p>
                </div>
                {index !== 1 && (
                    <div className="xl:absolute xl:left-[304px] xl:top-[-29px]">
                        <Image
                            preview={false}
                            src={imgUrl}
                            alt={imgDesc}
                            className="min-h-[400px] object-cover xl:max-h-[350px] xl:min-h-[350px] xl:min-w-[520px] xl:max-w-[520px] xl:rounded-md"
                        />
                            <figcaption className="px-[20px] text-right text-[10px] font-light text-gray-500 xl:px-0">
                                {imgAuthor}
                            </figcaption>
                    </div>
                )}
            </Link>
        </div>
    )
}

export default BlockNameBigImg