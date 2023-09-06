import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionImgTitle {
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

const SectionImgTitle: FC<ISectionImgTitle> = ({
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
        <div key={key}>
            <Link
                className="mb-6 block xl:mb-0 xl:max-w-[285px]"
                href={`${link}/${url}`}
            >
                <Image
                    className="object-cover xl:max-h-[190px] xl:min-h-[190px] xl:min-w-[285px] xl:max-w-[285px] xl:rounded-md"
                    src={imgUrl}
                    alt={imgDesc}
                    preview={false}
                />
                    <div className="px-[20px] xl:px-0">
                        <h2 className="mb-2 font-[16px] leading-[19px]">
                            {title}
                        </h2>
                        <div className="text-[13px] font-light leading-[16px] text-gray-500">
                            {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                        </div>
                    </div>
            </Link>
        </div>
    )
}

export default SectionImgTitle