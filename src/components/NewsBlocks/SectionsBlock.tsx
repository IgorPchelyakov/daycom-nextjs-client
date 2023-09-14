import { News } from '@/types/news'
import { FC } from 'react'
import SectionBlockName from '../UI/Wrappers/SectionBlockName'
import BlockNameBigImg from '../Articles/BlockNameBigImg'
import { Paths } from '@/data/Paths'
import SectionBlockNameSMImg from '../Articles/SectionBlockNameSMImg'
import BlockNameNoImg from '../Articles/BlockNameNoImg'
import NewsCarousel from '../Carousels/NewsCarousel'
import SectionNewsCarousel from '../Articles/SectionNewsCarousel'
import LineNewsBlock from './LineNewsBlock'
import { renderArticlesSection } from '@/utils/renderArticlesSection'

interface ISectionsBlock {
    data: News[]
    link: string
    pathToNews: string
    pathToNewsToday: string
}

const SectionsBlock: FC<ISectionsBlock> = ({
    data,
    link,
    pathToNews,
    pathToNewsToday
}) => {
    return (
        <div className="mx-auto mb-6 mt-6 gap-4 xl:flex xl:max-w-[1200px]">
            <div>
                <SectionBlockName 
                    sectionBlockName={'Війна Росії проти України'}
                >
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Війна Росії проти України')}
                    {renderArticlesSection(data, 2, 3, SectionBlockNameSMImg, 'Загальнонаціональна стрічка', link, 'Війна Росії проти України')}
                    <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                        {renderArticlesSection(data, 3, 5, BlockNameNoImg, 'Загальнонаціональна стрічка', link, 'Війна Росії проти України')}
                    </div>
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Суспільство'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Суспільство')}
                    <div className="mt-4 gap-5 pb-6 xl:flex pt-4 border-t border-t-gray-200">
                        {renderArticlesSection(data, 2, 4, BlockNameNoImg, 'Загальнонаціональна стрічка', link, 'Суспільство')}
                    </div>
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Європа'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Європа')}
                    <div className="rounded-md border xl:max-h-[258px] mb-4">
                        <NewsCarousel
                            blockTitle={''}
                            slidesToShowStart={1}
                            slidesToShowEnd={1}
                            slidesToScrollStart={1}
                            slidesToScrollEnd={1}
                        >
                            <SectionNewsCarousel
                                data={data}
                                blockName={'Європа'}
                                sliceStart={2}
                                sliceEnd={10}
                                link={Paths.news}
                            />
                        </NewsCarousel>
                    </div>
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Китай'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Китай')}
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Сполучені Штати'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Сполучені Штати')}
                    {renderArticlesSection(data, 2, 3, SectionBlockNameSMImg, 'Загальнонаціональна стрічка', link, 'Сполучені Штати')}
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Економіка та Фінанси'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Економіка', 'Фінанси')}
                </SectionBlockName>
                <SectionBlockName sectionBlockName={'Технології'}>
                    {renderArticlesSection(data, 0, 2, BlockNameBigImg, 'Загальнонаціональна стрічка', link, 'Технології')}
                    <div className="rounded-md border xl:max-h-[258px] mb-4">
                        <NewsCarousel
                            blockTitle={''}
                            slidesToShowStart={1}
                            slidesToShowEnd={1}
                            slidesToScrollStart={1}
                            slidesToScrollEnd={1}
                        >
                            <SectionNewsCarousel
                                data={data}
                                blockName={'Технології'}
                                sliceStart={2}
                                sliceEnd={10}
                                link={Paths.news}
                            />
                        </NewsCarousel>
                    </div>
                </SectionBlockName>
            </div>
            <div className="xl:border"></div>
            <LineNewsBlock data={data} pathToNews={pathToNews} pathToNewsToday={pathToNewsToday} link={link} />
        </div>
    )
}

export default SectionsBlock