'use client'
import { Button, DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import React, { FC, useCallback, useEffect, useState } from 'react'
import localeUa from 'antd/es/date-picker/locale/uk_UA'
import { News } from '@/types/news'
import 'dayjs/locale/uk'
dayjs.locale('uk')
import localeData from 'dayjs/plugin/localeData'
import { filterNewsByLineNewsAndDate } from '@/utils/filterNews'
import TodayNewspaperBlockOne from './TodayNewspaperBlockOne'
import TodayNewsPaperBlockTwo from './TodayNewsPaperBlockTwo'
import { getData } from '@/utils/getData'
dayjs.extend(localeData)

interface ITodayNewspaper {
    feedTitle: string
    feed: string
    link: string
    queryLink: string
}

const TodayNewspaper: FC<ITodayNewspaper> = ({
    feedTitle,
    feed,
    link,
    queryLink
}) => {
    const [data, setData] = useState<News[] | null>(null)
    const [currentDate, setCurrentDate] = useState(dayjs())

    const handleDateChange = useCallback(async (date: Dayjs | null) => {
        if (date) {
            const formattedDate = dayjs(date).format('YYYY-MM-DD')
            const newsData: News[] = await getData(formattedDate, queryLink)
            setData(newsData)
        }
    }, [queryLink])
    
    useEffect(() => {
        handleDateChange(currentDate)
    }, [currentDate, handleDateChange])

    const filteredData = data !== null && data !== undefined ? filterNewsByLineNewsAndDate(data, feed) : []

    return (
        <>  
            <div className="mx-auto max-w-[1200px] pt-6">
                <div className="px-[20px] xl:px-0">
                    <h1 className="mb-3 text-[26px] font-extralight leading-[29px] xl:text-[36px] xl:leading-[44px]">
                        Сьогоднішня газета
                    </h1>
                    <p className="mb-4 text-[12px] font-light leading-[15px] text-gray-500">
                        {`Щодня ми працюємо для наших читачів, шукаємо правду та допомагаємо отримувати 
                        головні новини в Україні та з багатьох країн світу.`}
                    </p>
                    <div className="mb-6 items-center justify-between border-b border-black pb-4 xl:flex">
                        <div className="mb-4 items-center gap-8 xl:mb-0 xl:flex">
                            <DatePicker
                                picker="date"
                                defaultValue={currentDate}
                                onChange={handleDateChange}
                                locale={localeUa}
                                className="mb-4 xl:mb-0"
                            />
                            <div>{feedTitle}</div>
                        </div>
                        <Button type={'default'} disabled>
                            Повідомити про новину
                        </Button>
                    </div>
                </div>
                <TodayNewspaperBlockOne
                    data={filteredData}
                    link={link}
                />
                <TodayNewsPaperBlockTwo
                    data={filteredData}
                    link={link}
                />
            </div>
        </>
    )
}

export default TodayNewspaper