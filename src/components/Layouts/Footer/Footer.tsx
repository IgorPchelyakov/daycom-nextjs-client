'use client'
import { Layout } from 'antd'
import React from 'react'
import Copyright from './Copyright'
import CorpLinks from './CorpLinks'
import TopFooter from './TopFooter/TopFooter'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const Footer = () => {
  return (
    <Layout.Footer
      className={`${inter.className} mx-auto w-full max-w-[1200px] border-t border-black bg-white px-0`}
    >
      <TopFooter />
      <CorpLinks />
      <Copyright />
    </Layout.Footer>
  )
}

export default Footer