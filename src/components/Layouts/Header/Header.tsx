'use client'
import { FC } from 'react'
import { Layout } from 'antd'
import TopHeader from './Top/TopHeader'
import StickyHeader from './Sticky/StickyHeader'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})

interface IHeader {
    location: string
    logoLink: string
    lineNewsLink: string
    newsPaperLink: string
}

const Header: FC<IHeader> = ({
    location,
    logoLink,
    lineNewsLink,
    newsPaperLink
}) => {

  return (
    <Layout.Header
        className={`${inter.className} left-0 right-0 top-0 z-50 mb-[12px] max-h-[40px] bg-white px-0 xl:mb-5 xl:min-h-[86px]`}
    >
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between ">
            <TopHeader
                location={location}
                logoLink={logoLink}
                newsPaperLink={newsPaperLink} 
            />
            <StickyHeader 
                lineNewsLink={lineNewsLink}
                newsPaperLink={newsPaperLink}
            />
        </div>
    </Layout.Header>
  )
}

export default Header