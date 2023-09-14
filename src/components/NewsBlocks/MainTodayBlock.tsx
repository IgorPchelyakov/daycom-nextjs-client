import React, { FC } from 'react'
import Heading24Hours from '../Articles/Heading24Hours'
import { News } from '@/types/news'
import MainTodayNoImg from '../Articles/MainTodayNoImg'
import MainTodayWithImg from '../Articles/MainTodayWithImg'
import MainTodayImgAndTitle from '../Articles/MainTodayImgAndTitle'
import MainTodayOnlyTitle from '../Articles/MainTodayOnlyTitle'
import { renderArticlesBlock } from '@/utils/renderArticlesBlock'

interface IMainToday {
    data: News[]
    link: string
}

const MainTodayBlock: FC<IMainToday> = ({
    data,
    link
}) => {
    return (
    <div className="mx-auto mt-7 flex-col justify-center px-[20px] xl:max-w-[1200px] xl:px-0">
        <Heading24Hours 
            data={data}
            block={'Заголовок газети 24 години'}
            feed={'Загальнонаціональна стрічка'}
            link={link}
        />
        <div 
            className="mb-4 flex flex-col items-center gap-4 border-b pb-6
            xl:flex-row xl:items-start xl:justify-between"
        >
            <div className="w-full xl:w-[289px]">
                <div className="mb-4 text-[12px] font-light leading-[15px] text-gray-600">
                    Головне сьогодні
                </div>
                {renderArticlesBlock(data, 1, 3, MainTodayNoImg, 'Загальнонаціональна стрічка', link, 'Головне сьогодні')}
            </div>
            <div className="w-full xl:w-[530px] xl:border-r xl:pr-6">
                {renderArticlesBlock(data, 0, 1, MainTodayWithImg, 'Загальнонаціональна стрічка', link, 'Головне сьогодні')}
            </div>
            <div className="w-full xl:w-[345px]">
                {renderArticlesBlock(data, 3, 6, MainTodayImgAndTitle, 'Загальнонаціональна стрічка', link, 'Головне сьогодні')}
            </div>
        </div>
        <div className="mb-4 border-b border-black pb-4 xl:flex xl:justify-between xl:gap-4">
            {renderArticlesBlock(data, 6, 10, MainTodayOnlyTitle, 'Загальнонаціональна стрічка', link, 'Головне сьогодні')}
        </div>
    </div>
    )
}

export default MainTodayBlock