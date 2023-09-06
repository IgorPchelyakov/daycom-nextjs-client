import { News } from '@/types/news'
import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionMdImgTitleDesc {
    key: string | number
    index: number
    array: News[]
    link: string
    url: string
    title: string
    description: string
    publishDate: Date
    imgUrl: string
    imgDesc: string
    section: string
    showSection: boolean
}

const SectionMdImgTitleDesc: FC<ISectionMdImgTitleDesc> = ({
    key,
    index,
    array,
    link,
    url,
    title,
    description,
    publishDate,
    imgUrl,
    imgDesc,
    section,
    showSection
}) => {
    return (
        <div
            key={key}
            className={`border-b pb-4 ${
            index === array.length - 1 ? 'border-none' : ''
            }`}
        >
            <Link
                href={`${link}/${url}`}
                className="flex justify-between gap-4 px-[20px] xl:px-0"
                >
                    <div className="xl:max-w-[279px]">
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
                    <Image
                        className="max-h-[90px] min-h-[90px] min-w-[90px] max-w-[90px] rounded-md object-cover xl:max-h-[120px] xl:min-h-[120px] xl:min-w-[180px] xl:max-w-[180px]"
                        src={imgUrl}
                        alt={imgDesc}
                        preview={false}
                    />
            </Link>
        </div>
    )
}

export default SectionMdImgTitleDesc