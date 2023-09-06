'use client'
import { Layout } from 'antd'
import React from 'react'

const Content = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <Layout.Content style={{ height: '100%', fontFamily: 'Inter' }}>
        { children }
    </Layout.Content>
  )
}

export default Content