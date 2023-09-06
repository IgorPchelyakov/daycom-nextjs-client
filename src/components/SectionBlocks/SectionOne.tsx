import { FC } from 'react'
import SectionBigImg from '../SectionArticles/SectionBigImg';
import SectionMdImg from '../SectionArticles/SectionMdImg';
import SectionFullNoImg from '../SectionArticles/SectionFullNoImg';
import SectionLineTitle from '../SectionArticles/SectionLineTitle';
import { renderSection } from '@/utils/renderSection';
import { Section } from '@/types/section';

const SectionOne: FC<Section> = ({
    data,
    link
}) => {
    if (data.length === 0) {
        return <p className='text-center'>Публікацій немає</p>;
    }

    return (
        <>
            <div className="justify-between gap-4 border-b pb-6 xl:mb-4 xl:flex">
                <div className="xl:w-[520px]">
                    {renderSection(data.slice(0, 1), SectionBigImg, link, false)}
                </div>
                <div className="border"></div>
                <div className="xl:w-[309px]">
                    <div className="flex flex-col gap-4">
                        {renderSection(data.slice(1, 3), SectionMdImg, link, false)}
                    </div>
                </div>
                <div className="xl:border"></div>
                <div className="xl:w-[309px]">
                    <div className="flex flex-col gap-4">
                        {renderSection(data.slice(3, 6), SectionFullNoImg, link, false)}
                    </div>
                </div>
            </div>
            <div className="mb-4 px-[20px] xl:justify-between gap-4 border-b border-black xl:flex xl:pb-4 xl:px-0">
                {renderSection(data.slice(6, 10), SectionLineTitle, link, false)}
            </div>
        </>
    )
}

export default SectionOne