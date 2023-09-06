import { Paths } from '@/data/Paths'
import { News } from '@/types/news'
import { Image } from 'antd'
import Link from 'next/link'
import { FC } from 'react'

interface ISectionBlockNameSMImg {
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

const SectionBlockNameSMImg: FC<ISectionBlockNameSMImg> = ({
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
        <div key={key} className='mb-4'>
            <Link
                href={`${linkTo}/${url}`}
                className="block px-[20px] xl:flex xl:gap-4 xl:px-0 xl:border-t xl:pt-4"
            >
                <div className="min-w-full xl:min-w-[290px] xl:max-w-[290px]">
                    <h2 className="mb-3 text-[18px] leading-[22px] xl:text-[16px] xl:leading-[19px]">
                        {title}
                    </h2>
                    <p className="mb-4 text-[13px] font-light leading-[16px] text-gray-500">
                        {description}
                    </p>
                </div>
                <Image
                    src={imgUrl}
                    preview={false}
                    alt={imgDesc}
                    className="rounded-md object-cover xl:max-h-[175px] xl:min-h-[175px] xl:min-w-[260px] xl:max-w-[260px]"
                />
                    <figcaption className="text-[12px] font-light leading-[15px] text-gray-400 xl:max-w-[244px]">
                        {imgDesc} {imgAuthor}
                    </figcaption>
            </Link>
        </div>
    )
}

export default SectionBlockNameSMImg