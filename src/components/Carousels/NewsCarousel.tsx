'use client'
import { FC, ReactNode } from 'react'
import { useMedia } from 'react-use';
import { News } from '@/types/news';
import { currentDate } from '../CurrentDate/dateCheckFunc';
import Link from 'next/link';
import { Paths } from '@/data/Paths';
import { Carousel, Image } from 'antd';

interface ICarouselProps {
    blockTitle: string
    slidesToShowStart: number
    slidesToShowEnd: number
    slidesToScrollStart: number
    slidesToScrollEnd: number
    children: ReactNode
}

const NewsCarousel: FC<ICarouselProps> = ({
    blockTitle,
    slidesToShowStart,
    slidesToShowEnd,
    slidesToScrollStart,
    slidesToScrollEnd,
    children
}) => {
    const isSmallScreen = useMedia('(max-width: 1199px)');
    const slidesToShow = isSmallScreen ? slidesToShowStart : slidesToShowEnd;
    const slidesToScroll = isSmallScreen ? slidesToScrollStart : slidesToScrollEnd;

    return (
        <div className="dots-container mx-auto mb-6 mt-2 pb-12 xl:max-w-[1200px]">
            <div className="mb-5 text-center">
                <div className="text-[12px] font-light leading-[15px]">
                    {blockTitle}
                </div>
            </div>
            <Carousel
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                dotPosition="bottom"
                className="xl:ml-4"
                dots={true}
                autoplay={true}
                autoplaySpeed={10000}
                draggable={true}
                pauseOnHover={true}
                speed={1000}
            >
                {children}
            </Carousel>
        </div>
    )
}

export default NewsCarousel