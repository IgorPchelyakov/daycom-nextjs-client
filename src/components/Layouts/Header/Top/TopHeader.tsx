import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CurrentDate from '@/components/CurrentDate/CurrentDate'
import logo from '@/assets/images/icons/logo.svg'


interface ITopHeader {
    location: string,
    logoLink: string,
    newsPaperLink: string
}

const TopHeader: FC<ITopHeader> = ({
    location,
    logoLink,
    newsPaperLink
}) => {
  return (
    <div className="top-header hidden w-full items-center justify-between border-b xl:visible xl:flex xl:h-[46px]">
            <CurrentDate location={location} />
            <div className="translate-x-[23px]">
                <Link href={logoLink}>
                    <Image
                        src={logo}
                        width={144}
                        height={20}
                        alt={'Логотип'}
                        />
                </Link>
            </div>
            <div className="flex gap-4 text-base">
                <Link href={newsPaperLink}>Сьогоднішня газета</Link>
                <Link href={'/'}>Підписка на Дейком</Link>
            </div>
          </div>
  )
}

export default TopHeader