import { FC } from 'react'
import LeftSideFooter from './LeftSideFooter'
import RightSideFooter from './RightSideFooter'

const TopFooter: FC = () => {
    return (
        <div className="mb-6 flex flex-col gap-4 border-b px-[20px] pb-6 xl:flex xl:flex-row xl:px-0">
            <LeftSideFooter />
            <RightSideFooter />
        </div>
    )
}

export default TopFooter