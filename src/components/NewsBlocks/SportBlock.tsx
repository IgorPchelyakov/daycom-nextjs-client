import { News } from '@/types/news'
import { FC } from 'react'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import BlockNameNoImg from '../Articles/BlockNameNoImg'
import { renderArticlesSection } from '@/utils/renderArticlesSection'
import { renderArticlesBlock } from '@/utils/renderArticlesBlock'
import LineNewsMiniImgAndTitle from '../Articles/LineNewsMiniImgAndTitle'

interface ISportBlock {
    data: News[]
    link: string
}

const SportBlock: FC<ISportBlock> = ({
    data,
    link
}) => {
    return (
        <div className="mx-auto flex-col justify-center xl:flex xl:max-w-[1200px]">
            <div className="mb-6 gap-4 xl:flex">
                <div className="flex-col xl:w-[830px]">
                    <SectionBlockName sectionBlockName={'Спорт'}>
                        {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Спорт')}
                        <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                            {renderArticlesSection(data, 2, 4, BlockNameNoImg, 'Загальнонаціональна стрічка', link, 'Спорт')}
                        </div>
                    </SectionBlockName>
                </div>
                <div className="xl:border"></div>
                <div className="mt-4 flex-col px-[20px] xl:mt-0 xl:w-[345px] xl:px-0">
                    {renderArticlesBlock(data, 41, 46, LineNewsMiniImgAndTitle, 'Загальнонаціональна стрічка', link, 'Стрічка новин')}
                </div>
            </div>
        </div>
    )
}

export default SportBlock