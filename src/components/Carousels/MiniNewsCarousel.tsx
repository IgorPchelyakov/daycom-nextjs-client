import { Carousel } from 'antd'
import { FC, ReactNode } from 'react'

interface IMiniNewsCarousel {
    blockTitle: string
    slidesToShowStart: number
    slidesToShowEnd?: number
    slidesToScrollStart: number
    slidesToScrollEnd?: number
    children: ReactNode
}

const MiniNewsCarousel: FC<IMiniNewsCarousel> = ({
    blockTitle,
    slidesToShowStart,
    slidesToShowEnd,
    slidesToScrollStart,
    slidesToScrollEnd,
    children
}) => {
    return (
        <div className="dots-container mb-12 pb-2 border-b border-black">
            <div className="mb-1 text-[12px] font-light leading-[15px] text-gray-500">
                {blockTitle}
            </div>
            <Carousel
                slidesToShow={slidesToShowStart}
                slidesToScroll={slidesToScrollStart}
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

export default MiniNewsCarousel