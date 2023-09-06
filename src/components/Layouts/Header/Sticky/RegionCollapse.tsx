import { FC } from 'react'
import { 
    regionDniprovska,
    regionKyiv,
    regionOdesa
} from '@/data/CollapseRegion'
import MenuPopover from '@/components/Popovers/MenuPopover'

const RegionCollapse: FC = () => {
    return (
        <>
            <MenuPopover
                content={regionDniprovska} 
                title={'Дніпропетровська область'}
                btnText={'Дніпропетровська область'}
                arrow={false}
            />
            <MenuPopover
                content={regionKyiv} 
                title={'Київська область'}
                btnText={'Київська область'}
                arrow={false}
            />
            <MenuPopover
                content={regionOdesa} 
                title={'Одеська область'}
                btnText={'Одеська область'}
                arrow={false}
            />
        </>
    )
}

export default RegionCollapse