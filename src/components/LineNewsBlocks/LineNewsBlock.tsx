import { News } from '@/types/news'
import { Button } from 'antd'
import { FC } from 'react'
import LineNewsBlockOne from './LineNewsBlockOne'
import { filterNewsByLineNewsAndDate } from '@/utils/filterNews'
import LineNewsBlockTwo from './LineNewsBlockTwo'
import LineNewsBlockThree from './LineNewsBlockThree'
import LineNewsBlockFour from './LineNewsBlockFour'
import LineNewsBlockFive from './LineNewsBlockFive'
import LineNewsBlockSix from './LineNewsBlockSix'

interface ILineNewsBlock {
    data: News[]
    link: string
    selectedFeed: string
    feedTitle: string
}

const LineNewsBlock: FC<ILineNewsBlock> = ({
    data,
    link,
    selectedFeed,
    feedTitle
}) => {
    const filteredData = filterNewsByLineNewsAndDate(data, selectedFeed)

    return (
        <div className="mx-auto max-w-[1200px] pt-6">
            <div className="px-[20px] xl:px-0">
                <h1 className="mb-3 text-[26px] font-extralight leading-[29px] xl:text-[36px] xl:leading-[44px]">
                    Стрічка новин
                </h1>
                <p className="mb-4 text-[12px] font-light leading-[15px] text-gray-500">
                    {`Головні новини в прямому ефірі, розслідування, думки, фотографії та
                    відео журналістів з багатьох країн світу. Ми висвітлюємо українські та
                    міжнародні новини, серед яких: політика, бізнес, технології, наука,
                    здоров'я, мистецтво, спорт, та інші події з багатьої куточків світу.`}
                </p>
                <div className="mb-6 items-center justify-between border-b border-black pb-4 xl:flex">
                    <div className="mb-4 xl:mb-0">{feedTitle}</div>
                    <Button type={'default'} disabled>
                        Повідомити про новину
                    </Button>
                </div>
            </div>
            <LineNewsBlockOne
                data={filteredData}
                link={link}
            />
            <LineNewsBlockTwo
                data={filteredData}
                link={link}
            />
            <LineNewsBlockThree
                data={filteredData}
                link={link}
            />
            <LineNewsBlockFour
                data={filteredData}
                link={link}
            />
            <LineNewsBlockFive
                data={filteredData}
                link={link}
            />
            <LineNewsBlockSix
                data={filteredData}
                link={link}
            />
        </div>
    )
}

export default LineNewsBlock