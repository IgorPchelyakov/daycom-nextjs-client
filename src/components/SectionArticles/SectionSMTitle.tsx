import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { FC } from 'react'

interface ISectionSMTitle{
    key: string | number
    link: string
    url: string
    title: string
    publishDate: Date
    section: string
    showSection: boolean
}

const SectionSMTitle: FC<ISectionSMTitle> = ({
    key,
    link,
    url,
    title,
    publishDate,
    section,
    showSection
}) => {
    return (
        <div key={key}>
            <Link
                href={`${link}/${url}`}
                className="mb-4 block min-w-[335px] justify-between gap-4 xl:mb-0 xl:w-1/2"
            >
                <div className="px-[20px] xl:max-w-[279px] xl:px-0">
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

export default SectionSMTitle