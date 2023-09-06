import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionCard {
    key: string | number
    link: string
    url: string
    imgUrl: string
    imgDesc: string
    title: string
    publishDate: Date
    section: string
    showSection: boolean
}

const SectionCard: FC<ISectionCard> = ({
    key,
    link,
    url,
    imgUrl,
    imgDesc,
    title,
    publishDate,
    section,
    showSection
}) => {
    return (
        <div
            key={key}
            className="mb-6 px-[20px] xl:mb-0 xl:max-w-[215px] xl:px-0"
        >
            <Link
                href={`${link}/${url}`}
                className="flex xl:block"
            >
                <Image
                    className="max-h-[90px] min-h-[90px] min-w-[90px] max-w-[90px] rounded-md object-cover xl:max-h-[145px] xl:min-h-[145px] xl:min-w-[215px] xl:max-w-[215px]"
                    src={imgUrl}
                    alt={imgDesc}
                    preview={false}
                />
                <div className="pl-4 xl:pl-0">
                    <h2 className="mb-2 text-[12px] leading-[15px]">
                        {title}
                    </h2>
                    <div className="text-[12px] font-extralight leading-[15px] text-gray-500">
                        {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SectionCard