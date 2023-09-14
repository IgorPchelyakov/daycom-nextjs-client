import { News } from '@/types/news'
import React, { FC } from 'react'
import FiveCardWrapper from '../UI/Wrappers/FiveCardWrapper'
import NewsCard from '../Articles/NewsCard'
import { renderArticlesSection } from '@/utils/renderArticlesSection'

interface IFiveCardBlock {
    data: News[]
    link: string
}

const FiveCardBlock: FC<IFiveCardBlock> = ({
    data,
    link
}) => {
    return (
        <div className="mx-auto xl:max-w-[1200px] border-t border-black">
            <FiveCardWrapper
                sectionBlockName={'Політика та Влада'}
                divider={true}>
                    {renderArticlesSection(data, 0, 5, NewsCard, 'Загальнонаціональна стрічка', link, 'Політика', 'Влада')}
            </FiveCardWrapper>
            <FiveCardWrapper
                sectionBlockName={'Північна та Південна Америка'}
                divider={true}>
                    {renderArticlesSection(data, 0, 5, NewsCard, 'Загальнонаціональна стрічка', link, 'Північна Америка', 'Південна Америка')}
            </FiveCardWrapper>
            <FiveCardWrapper
                sectionBlockName={'Близький схід'}
                divider={true}>
                    {renderArticlesSection(data, 0, 5, NewsCard, 'Загальнонаціональна стрічка', link, 'Близький схід')}
            </FiveCardWrapper>
            <FiveCardWrapper
                sectionBlockName={'Тихоокеанський регіон'}
                divider={true}>
                    {renderArticlesSection(data, 0, 5, NewsCard, 'Загальнонаціональна стрічка', link, 'Тихоокеанський регіон')}
            </FiveCardWrapper>
            <FiveCardWrapper 
                sectionBlockName={'Африка'}
                divider={false}>
                    {renderArticlesSection(data, 0, 5, NewsCard, 'Загальнонаціональна стрічка', link, 'Африка')}
            </FiveCardWrapper>
        </div>
    )
}

export default FiveCardBlock