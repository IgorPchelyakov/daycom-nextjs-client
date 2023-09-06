import { FC, useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import LeftMenu from './LeftMenu';
import { Paths, SectionPaths } from '@/data/Paths';
import logo from '@/assets/images/icons/logo.svg'
import { Button, Popover } from 'antd';
import { ArrowDownOutlined, UserOutlined } from '@ant-design/icons';
import { section } from '@/data/SectionsPopover';

interface IStickyHeader {
  lineNewsLink: string;
  newsPaperLink: string;
}

const StickyHeader: FC<IStickyHeader> = ({
  lineNewsLink,
  newsPaperLink
}) => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const topHeaderHeight =
      document.querySelector('.top-header')?.clientHeight || 0;

    const handleScroll = () => {
      if (window.pageYOffset >= topHeaderHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky-header mx-auto flex w-full justify-center px-[12px] ${
        isSticky ? 'sticky' : ''
        }`}
        >
          <div className="flex h-[40px] w-full max-w-[1200px] items-center justify-between pt-2 xl:pt-0">
            <LeftMenu lineNewsLink={lineNewsLink} newsPaperLink={newsPaperLink} />
            <div className="translate-x-[-12px] xl:pt-3 xl:hidden">
              <Link href={Paths.home}>
                <Image src={logo} alt={'Логотип'} />
              </Link>
            </div>
            <div className="hidden items-center gap-4 text-base xl:visible xl:flex">
              <Link href={SectionPaths.Vijna}>Війна Росії проти України</Link>
              <Link href={SectionPaths.USA}>США</Link>
              <Link href={SectionPaths.Europe}>Європа</Link>
              <Link href={SectionPaths.China}>Китай</Link>
              <Link href={SectionPaths.Suspilstvo}>Суспільство</Link>
              <Link href={SectionPaths.Biznes}>Бізнес</Link>
              <Link href={SectionPaths.Polityka}>Політика</Link>
              <Link href={SectionPaths.Ekonomika}>Економіка</Link>
              <Link href={SectionPaths.Analityka}>Аналітика</Link>
              <Link href={SectionPaths.Technologies}>Технології</Link>
              <Link href={SectionPaths.Nauka}>Наука</Link>
              <Link href={SectionPaths.Kultura}>Культура</Link>
              <Popover
                content={section}
                trigger={'hover'}
                placement={'bottomRight'}
              >
                <Button
                  size="small"
                  className="border-none"
                  icon={<ArrowDownOutlined className='pb-2' />}
                />
              </Popover>
            </div>
            <div className="cursor-pointer text-base text-gray-500">
              <Button type={'link'} disabled icon={<UserOutlined />}></Button>
            </div>
          </div>
        </div>
  )
}

export default StickyHeader