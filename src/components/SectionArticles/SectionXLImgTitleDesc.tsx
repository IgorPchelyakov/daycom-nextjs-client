import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionXLImgTitleDesc {
    key: string | number
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

const SectionXLImgTitleDesc: FC<ISectionXLImgTitleDesc> = ({
    key,
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
        <div key={key}>
            <Link
                href={`${link}/${url}`}
                className="mt-4 block justify-between gap-4 xl:mt-0 xl:flex"
            >
                <div className="px-[20px] xl:max-w-[279px] xl:px-0">
                    <h2 className="mb-2 font-[16px] leading-[19px]">
                        {title}
                    </h2>
                    <p className="mb-2 text-[13px] font-light leading-[16px] text-gray-500">
                        {description}
                    </p>
                    <div className="mb-4 text-[13px] font-light leading-[16px] text-gray-500 xl:mb-0">
                        {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                    </div>
                </div>
                <Image
                    className="object-cover xl:max-h-[266px] xl:min-h-[266px] xl:min-w-[400px] xl:max-w-[400px] xl:rounded-md"
                    src={imgUrl}
                    alt={imgDesc}
                    preview={false}
                />
            </Link>
        </div>
    )
}

export default SectionXLImgTitleDesc