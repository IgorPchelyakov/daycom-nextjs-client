import { News } from '@/types/news'
import { FC } from 'react'
import LineNewsOnlyTitle from '../Articles/LineNewsOnlyTitle'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import BlockNameNoImg from '../Articles/BlockNameNoImg'
import LineNewsMiniImgAndTitle from '../Articles/LineNewsMiniImgAndTitle'
import { renderArticlesBlock } from '@/utils/renderArticlesBlock'
import { renderArticlesSection } from '@/utils/renderArticlesSection'

interface ISinceBlock {
    data: News[]
    link: string
}

const SinceBlock: FC<ISinceBlock> = ({
    data,
    link
}) => {
  return (
    <div className="mx-auto mb-2 mt-7 flex max-w-[1200px] flex-col justify-center">
        <div className="mb-4 gap-4 border-y border-black pb-4 pt-4 xl:flex xl:justify-between">
            {renderArticlesBlock(data, 20, 24, LineNewsOnlyTitle, 'Загальнонаціональна стрічка', link, 'Стрічка новин')}
        </div>
        <div className="mb-4 gap-4 xl:flex">
            <div className="flex-col xl:w-[830px]">
                <SectionBlockName sectionBlockName={'Наука'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Наука')}
                    <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                        {renderArticlesSection(data, 3, 5, BlockNameNoImg, 'Загальнонаціональна стрічка', link, 'Наука')}
                    </div>
                </SectionBlockName>
            </div>
            <div className="xl:border"></div>
            <div className="mt-4 flex-col px-[20px] xl:mt-0 xl:w-[345px] xl:px-0">
                {renderArticlesBlock(data, 24, 28, LineNewsMiniImgAndTitle, 'Загальнонаціональна стрічка', link, 'Стрічка новин')}
            </div>
        </div>
        <div className="mb-4 gap-4 border-y border-black pb-4 pt-4 xl:flex xl:justify-between">
            {renderArticlesBlock(data, 28, 32, LineNewsOnlyTitle, 'Загальнонаціональна стрічка', link, 'Стрічка новин')}
        </div>
    </div>
  )
}

export default SinceBlock