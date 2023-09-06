import { News } from '@/types/news'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionNoImg {
    key: string | number
    index: number
    array: News[]
    link: string
    url: string
    title: string
    description: string
    publishDate: Date
    section: string
    showSection: boolean
}

const SectionFullNoImg: FC<ISectionNoImg> = ({
    key,
    index,
    array,
    link,
    url,
    title,
    description,
    publishDate,
    section,
    showSection
}) => {
    return (
        <div
            key={key}
            className={
                index !== array.length - 1 ? 'border-b pb-4' : 'xl:pb-4'
            }
            >
                <Link href={`${link}/${url}`}>
                    {index === 0 ? (
                        <>
                            <div className="px-[20px] xl:px-0">
                                <h2 className="mb-2 font-[16px] leading-[19px]">
                                    {title}
                                </h2>
                                <p className="pb-2 text-[13px] font-light leading-[16px] text-gray-500">
                                    {description}
                                </p>
                                <div className="text-[13px] font-light leading-[16px] text-gray-500">
                                    {dayjs(publishDate).format('DD MMMM YYYY')}
                                </div>
                            </div>
                        </>
                        ) : (
                            <>
                                <div className="px-[20px] xl:px-0">
                                    <h2 className="mb-2 font-[16px] leading-[19px]">
                                        {title}
                                    </h2>
                                    <p className="pb-2 text-[13px] font-light leading-[16px] text-gray-500">
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

export default SectionFullNoImg