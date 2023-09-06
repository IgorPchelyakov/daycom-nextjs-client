import { FC } from 'react'
import { News } from '@/types/news'
import Link from 'next/link'
import { Paths } from '@/data/Paths'

interface IBlockNameNoImg {
    key: string | number
    index: number
    array: News[]
    title: string
    description: string
    link: string
    articleFeed: string
    feed: string
    url: string
}

const BlockNameNoImg: FC<IBlockNameNoImg> = ({
    key,
    index,
    array,
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
                className={`block px-[20px] xl:px-0 ${
                    index !== array.length - 1 ? 'xl:border-r xl:pr-5' : ''
                }`}
            >
                <div className="xl:w-[395px]">
                    <h2 className="mb-3 text-[18px] leading-[22px] xl:text-[16px] xl:leading-[19px]">
                        {title}
                    </h2>
                    <p className="mb-4 text-[13px] font-light leading-[16px] text-gray-500">
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default BlockNameNoImg