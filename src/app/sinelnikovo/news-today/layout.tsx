import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Layouts/Header/Header'
import Content from '@/components/Layouts/Content/Content'
import Footer from '@/components/Layouts/Footer/Footer'
import { RegionDniproPaths } from '@/data/Paths'

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
        url: RegionDniproPaths.sinelnikovoNewsToday,
        type: 'website',
        locale: 'ua',
        siteName: 'Дейком - Головні новини, України та світу',
    },
}

const LayoutSinelniovoNewspaper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const location = 'Синельникове'
  const logoLink = RegionDniproPaths.sinelnikovoHome
  const lineNewsLink = RegionDniproPaths.sinelnikovoNews
  const newsPaperLink = RegionDniproPaths.sinelnikovoNewsToday

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

export default LayoutSinelniovoNewspaper