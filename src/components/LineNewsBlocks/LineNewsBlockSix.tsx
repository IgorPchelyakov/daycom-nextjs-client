'use client'
import { LineNews } from '@/types/lineNews'
import { FC, useState } from 'react'
import SectionCard from '../SectionArticles/SectionCard';
import { renderSection } from '@/utils/renderSection';
import Image from 'next/image'
import line from '@/assets/images/icons/line.svg'

const LineNewsBlockSix: FC<LineNews> = ({
    data,
    link
}) => {
    const [visibleArticles, setVisibleArticles] = useState(80);
    const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 25)
    }

    if (data.length <= 55) {
        return null
    }

    return (
        <div className="pb-6 pt-6">
            <div className="grid-cols-5 gap-4 xl:grid xl:pl-4">
                {renderSection(data.slice(55, visibleArticles), SectionCard, link, true)}
            </div>
            {data && visibleArticles < data.length && (
                <div className="mt-10">
                    <Image src={line} alt={'Лінія розділу'} />
                    <div className="z-10 translate-y-[-50px]">
                        <button
                            onClick={loadMoreArticles}
                            className="mx-auto mt-10 block rounded-md px-4 py-2 text-base text-gray-500 transition-shadow hover:shadow-md"
                            style={{ backgroundColor: '#F7F7F7' }}
                            >
                                ПОКАЗАТИ БІЛЬШЕ
                            </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LineNewsBlockSix