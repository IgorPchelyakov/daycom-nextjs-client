import { News } from '@/types/news'
import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionMdImg {
    key: string | number
    index: number
    array: News[]
    link: string
    url: string
    imgUrl: string
    imgDesc: string
    imgAuthor: string
    title: string
    description: string
    publishDate: Date
    section: string
    showSection: boolean
}

const SectionMdImg: FC<ISectionMdImg> = ({
    key,
    index,
    array,
    link,
    url,
    imgUrl,
    imgDesc,
    imgAuthor,
    title,
    description,
    publishDate,
    section,
    showSection
}) => {
    return (
        <div key={key}
            className={
                index !== array.length - 1 ? 'border-b pb-4' : 'pb-4'
            }
            >
                <Link href={`${link}/${url}`}>
                    {index === 0 ? (
                        <>
                            <Image
                                className="min-h-[320px] object-cover xl:max-h-[206px] xl:min-h-[206px] xl:min-w-[309px] xl:max-w-[309px] xl:rounded-md"
                                src={imgUrl}
                                alt={imgDesc}
                                preview={false}
                                />
                            <figcaption className="px-[20px] text-right text-[10px] font-light text-gray-500 xl:px-0">
                                {imgAuthor}
                            </figcaption>
                            <div className="px-[20px] xl:px-0">
                                <h2 className="pb-2 font-[16px] leading-[19px]">
                                    {title}
                                </h2>
                                <p className="mb-2 text-[13px] font-light leading-[16px] text-gray-500">
                                    {description}
                                </p>
                                <div className="text-[13px] font-light leading-[16px] text-gray-500">
                                    {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                                </div>
                            </div>
                        </>
                        ) : (
                            <>
                                <div className="px-[20px] xl:px-0">
                                <h2 className="mb-2 font-[16px] leading-[19px]">
                                    {title}
                                </h2>
                                <p className="mb-2 text-[13px] font-light leading-[16px] text-gray-500">
                                    {description}
                                </p>
                                <div className="text-[13px] font-light leading-[16px] text-gray-500">
                                    {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                                </div>
                                </div>
                            </>
                        )}
                </Link>
        </div>
    )
}

export default SectionMdImg