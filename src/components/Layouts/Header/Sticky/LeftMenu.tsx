import { FC, useState } from 'react'
import { Button, Collapse, Space } from 'antd';
import { CloseOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import MainMenuDrawer from '@/components/Drawer/MainMenuDrawer'
import Image from 'next/image';
import logoBW from '@/assets/images/icons/logoWB.svg'
import Link from 'next/link';
import { CorpPaths, Paths } from '@/data/Paths';
import RegionCollapse from './RegionCollapse';
import SectionBlocksNav from './SectionBlocksNav';
const { Panel } = Collapse;

interface ILeftMenu {
    lineNewsLink: string;
    newsPaperLink: string;
}

const LeftMenu: FC<ILeftMenu> = ({
    lineNewsLink,
    newsPaperLink
}) => {
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

    const showMenuBurgerDrawer = () => {
        setIsMainMenuOpen(true);
      };
      const onMenuBurgerClose = () => {
        setIsMainMenuOpen(false);
      };
  return (
    <>
        <div className="flex items-center gap-3">
            <MainMenuDrawer
                placement={'left'}
                closable={false}
                open={isMainMenuOpen}
                onClose={onMenuBurgerClose}
                onClick={showMenuBurgerDrawer}
                htmlType={'button'}
                type={'text'}
                icon={<MenuOutlined />}
                >
                    <Button
                        className="absolute right-5 top-5"
                        type={'text'}
                        icon={<CloseOutlined />}
                        onClick={onMenuBurgerClose}
                    />
                    <Space className="flex w-full flex-col items-start">
                        <Image
                            src={logoBW}
                            alt={'Логотип'}
                            className="mb-2"
                        />
                        <Link href={Paths.home} className="mb-4 block font-bold">
                            Домашня сторінка
                        </Link>
                        <Collapse
                            size="small"
                            expandIconPosition={'end'}
                            className="w-[270px] bg-white"
                        >
                            <Panel header={'Обрати місто'} key={1}>
                                <RegionCollapse />
                            </Panel>
                        </Collapse>
                        <SectionBlocksNav />
                        <Button type={'text'} className="w-[280px] text-left">
                            <Link href={lineNewsLink}>Стрічка новин</Link>
                        </Button>
                        <Button type={'text'} className="w-[280px] text-left">
                            <Link href={newsPaperLink}>Сьогоднішня газета</Link>
                        </Button>
                        <div className="my-3 w-[270px] border"></div>
                        <Button type={'text'} className="w-full text-left">
                            <Link href={`${CorpPaths.moreAboutUs}`}>Компанія</Link>
                        </Button>
                        <Button type={'text'} className="w-full text-left">
                            <Link href={`${CorpPaths.politics}`}>Політика Дейком</Link>
                        </Button>
                        <Button type={'text'} className="w-full text-left">
                            <Link href={`${CorpPaths.legalInformation}`}>
                                Юридична інформація
                            </Link>
                        </Button>
                        <Button type={'text'} className="w-full text-left">
                            <Link href={'/'}>Зв’яжіться з нами</Link>
                        </Button>
                    </Space>
            </MainMenuDrawer>
            <SearchOutlined className='cursor-pointer text-gray-300' />
        </div>
    </>
  )
}

export default LeftMenu