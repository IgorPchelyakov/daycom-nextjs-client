import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
import { Image } from 'antd';
dayjs.extend(localeData);

interface ISectionSMImgTitle {
    key: string | number
    link: string
    url: string
    title: string
    publishDate: Date
    imgUrl: string
    imgDesc: string
    section: string
    showSection: boolean
}
const SectionSMImgTitle: FC<ISectionSMImgTitle> = ({
    key,
    link,
    url,
    title,
    publishDate,
    imgUrl,
    imgDesc,
    section,
    showSection
}) => {
    return (
        <div key={key} className="mb-4 pb-4 xl:w-1/3">
            <Link href={`${link}/${url}`}>
                <div className="mx-4 flex justify-between">
                    <div className="px-2 xl:max-w-[255px]">
                        <h2 className="mb-3 text-[16px] font-light leading-[19px]">
                            {title}
                        </h2>
                        <div className="text-[12px] font-extralight leading-[15px] text-gray-500">
                            {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                        </div>
                    </div>
                    <Image
                        className="max-h-[90px] min-h-[90px] min-w-[90px] max-w-[90px] rounded-md object-cover xl:max-h-[80px] xl:min-h-[80px] xl:min-w-[120px] xl:max-w-[120px]"
                        src={imgUrl}
                        alt={imgDesc}
                        preview={false}
                    />
                </div>
            </Link>
        </div>
    )
}

export default SectionSMImgTitle