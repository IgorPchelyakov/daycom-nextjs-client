import { News } from '@/types/news'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionLineTitle {
    key: string | number
    index: number
    array: News[]
    link: string
    url: string
    title: string
    publishDate: Date
    section: string
    showSection: boolean
}

const SectionLineTitle: FC<ISectionLineTitle> = ({
    key,
    index,
    array,
    link,
    url,
    title,
    publishDate,
    section,
    showSection
}) => {
    return (
        <Link 
            href={`${link}/${url}`} 
            key={key}
            className={`${
                index !== array.length - 1
                    ? 'border-b xl:border-b-0 xl:border-r'
                    : ''
                } block py-4 xl:w-1/4 xl:px-2`}
        >
            <h2 className="mb-2 font-[16px] leading-[19px]">
                {title}
            </h2>
            <div className="text-[13px] font-light leading-[16px] text-gray-500">
                {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
            </div>
        </Link>
    )
}

export default SectionLineTitle