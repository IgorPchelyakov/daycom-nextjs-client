import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import 'dayjs/locale/uk';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

interface ISectionBigImg {
    key: string | number
    url: string
    link: string
    imgUrl: string
    imgDesc: string
    imgAuthor: string
    title: string
    description: string
    publishDate: Date
    section: string
    showSection: boolean
}

const SectionBigImg: FC<ISectionBigImg> = ({
    key,
    url,
    link,
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
        <>
            <div key={key}>
                <Link href={`${link}/${url}`}>
                      <div className="mb-3 text-right">
                        <Image
                          className="min-h-[320px] object-cover xl:max-h-[350px] xl:min-h-[350px] xl:min-w-[520px] xl:max-w-[520px] xl:rounded-md"
                          src={imgUrl}
                          alt={imgDesc}
                          preview={false}
                        />
                        <figcaption className="px-[20px] text-right text-[10px] font-light text-gray-500 xl:px-0">
                          {imgAuthor}
                        </figcaption>
                      </div>
                      <div className="mb-6 px-[20px] xl:mb-0 xl:px-3">
                        <h2 className="mb-3 text-[16px] leading-[19px]">
                          {title}
                        </h2>
                        <p className="pb-2 text-[13px] font-light leading-[16px] text-gray-500">
                          {description}
                        </p>
                        <div className="text-[13px] font-light leading-[16px] text-gray-500">
                          {dayjs(publishDate).format('DD MMMM YYYY')}{`${showSection ? `, ${section}` : ''}`}
                        </div>
                      </div>
                </Link>
            </div>
        </>
    )
}

export default SectionBigImg