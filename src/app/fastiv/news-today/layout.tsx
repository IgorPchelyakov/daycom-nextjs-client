import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Layouts/Header/Header'
import Content from '@/components/Layouts/Content/Content'
import Footer from '@/components/Layouts/Footer/Footer'
import { RegionKyivPaths } from '@/data/Paths'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
    title: 'Сьогоднішня газета',
    description: 'Щодня ми працюємо для наших читачів, шукаємо правду та допомагаємо отримувати головні новини в Україні та з багатьох країн світу.',
    applicationName: 'Дейком - Головні новини, України та світу',
    openGraph: {
        title: 'Сьогоднішня газета',
        description: 'Щодня ми працюємо для наших читачів, шукаємо правду та допомагаємо отримувати головні новини в Україні та з багатьох країн світу.',
        url: RegionKyivPaths.fastivNewsToday,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

const LayoutFastivNewspaper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const location = 'Фастів'
  const logoLink = RegionKyivPaths.fastivHome
  const lineNewsLink = RegionKyivPaths.fastivNews
  const newsPaperLink = RegionKyivPaths.fastivNewsToday

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

export default LayoutFastivNewspaper