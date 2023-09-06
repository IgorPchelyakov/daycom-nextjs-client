import { Button, Drawer } from 'antd';
import { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode;
    htmlType?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    type?:
      | 'link'
      | 'text'
      | 'default'
      | 'primary'
      | 'dashed'
      | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: 'default' | 'circle' | 'round' | undefined;
    icon?: ReactNode;
    title?: ReactNode;
    placement?: 'top' | 'right' | 'left' | 'bottom' | undefined;
    closable?: boolean | undefined;
    onClose?: () => void;
    open?: boolean | undefined;
    key?: React.Key | undefined;
  };

const MainMenuDrawer: FC<Props> = ({
    children,
    htmlType = 'button',
    type,
    danger,
    loading,
    shape,
    icon,
    onClick,
    title,
    placement,
    closable,
    onClose,
    open,
    key,
  }) => {
  return (
    <>
      <Button
        className="flex items-center justify-center"
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        size="middle"
      ></Button>
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={open}
        key={key}
        width={320}
      >
        {children}
      </Drawer>
    </>
  )
}

export default MainMenuDrawer