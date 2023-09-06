import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Layouts/Header/Header'
import Content from '@/components/Layouts/Content/Content'
import Footer from '@/components/Layouts/Footer/Footer'
import { RegionOdesaPaths } from '@/data/Paths'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Дейком - Головні новини, України та світу',
  description: 'Новини в прямому ефірі, розслідування, думки, фотографії та відео журналістів Дейком з багатьох країн світу. Підпишіться на висвітлення України та міжнародних новин, політика, бізнес, технології, наука, здоров\'я, мистецтво, спорт тощо.',
  applicationName: 'Дейком - Головні новини, України та світу',
  openGraph: {
    title: 'Дейком - Головні новини, України та світу',
    description: 'Новини в прямому ефірі, розслідування, думки, фотографії та відео журналістів Дейком з багатьох країн світу. Підпишіться на висвітлення України та міжнародних новин, політика, бізнес, технології, наука, здоров\'я, мистецтво, спорт тощо.',
    url: RegionOdesaPaths.chornomorskHome,
    type: 'website',
    locale: 'ua',
    siteName: 'Дейком - Головні новини, України та світу',
    images: [
      {
        url: RegionOdesaPaths.chornomorskHome,
        width: 800,
        height: 600,
      }
    ]
  },
}

const ChornomorskLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const location = 'Чорноморськ'
  const logoLink = RegionOdesaPaths.chornomorskHome
  const lineNewsLink = RegionOdesaPaths.chornomorskNews
  const newsPaperLink = RegionOdesaPaths.chornomorskNewsToday

  return (
    <html lang="uk">
      <body 
        className={inter.className}
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 1920,
          minHeight: '100vh'
        }}
      >
        <Header location={location} logoLink={logoLink} lineNewsLink={lineNewsLink} newsPaperLink={newsPaperLink} />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  )
}

export default ChornomorskLayout