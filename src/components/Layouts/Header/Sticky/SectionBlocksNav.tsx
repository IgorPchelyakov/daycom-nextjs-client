import { FC } from 'react'
import MenuPopover from '@/components/Popovers/MenuPopover'
import {
  lifeStyle,
  moreNews,
  news,
  opinion,
  society
} from '@/data/SectionsPopover'

const SectionBlocksNav: FC = () => {
  return (
    <>
        <MenuPopover
          content={news} 
          title={'Новини'}
          btnText={'Новини'}
          arrow={true}
        />
        <MenuPopover
          content={society} 
          title={'Суспільство'}
          btnText={'Суспільство'}
          arrow={true}
        />
        <MenuPopover
          content={news} 
          title={'Новини'}
          btnText={'Новини'}
          arrow={true}
        />
        <MenuPopover
          content={opinion} 
          title={'Думка'}
          btnText={'Думка'}
          arrow={true}
        />
        <MenuPopover
          content={lifeStyle} 
          title={'Спосіб життя'}
          btnText={'Спосіб життя'}
          arrow={true}
        />
        <MenuPopover
          content={moreNews} 
          title={'Більше новин'}
          btnText={'Більше новин'}
          arrow={true}
        />
    </>
  )
}

export default SectionBlocksNav