import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd'
import { FC } from 'react'
import { useMedia } from 'react-use';

interface IRegionPopover {
    content: JSX.Element;
    title: string;
    btnText: string;
    arrow: boolean;
}

const MenuPopover: FC<IRegionPopover> = ({
    content,
    title,
    btnText,
    arrow
}) => {
    const isSmallScreen = useMedia('(max-width: 600px)')
    
    return (
        <>
            <Popover
                content={content}
                title={title}
                placement={isSmallScreen ? 'bottom' : 'rightTop'}
                className={arrow ? 'w-[280px] text-left' : 'w-full'}
            >
                <Button 
                    type={'text'}
                    className={arrow ? 'flex items-center justify-between' : ''}
                >
                    {btnText} {arrow ? <ArrowRightOutlined /> : null}
                </Button>
            </Popover>
        </>
    )
}

export default MenuPopover