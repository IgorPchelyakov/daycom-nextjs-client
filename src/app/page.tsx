import MainTodayBlock from "@/components/NewsBlocks/MainTodayBlock";
import { Paths } from "@/data/Paths";
import TopNewsBlock from "@/components/NewsBlocks/TopNewsBlock";
import SectionsBlock from "@/components/NewsBlocks/SectionsBlock";
import SinceBlock from "@/components/NewsBlocks/SinceBlock";
import CultureBlock from "@/components/NewsBlocks/CultureBlock";
import LineBlock from "@/components/NewsBlocks/LineBlock";
import SportBlock from "@/components/NewsBlocks/SportBlock";
import FiveCardBlock from "@/components/NewsBlocks/FiveCardBlock";

const localhost = 'http://localhost:4444/api/news/'
const localhostDnipro = 'http://localhost:4444/api/dnipro/with-national-news'
const server = 'https://sside.daycom.online/api/news'
const serverDnipro = 'https://sside.daycom.online/api/dnipro/with-national-news'

async function getData() {
  const res = await fetch(server)
  return res.json()
}

export default async function Home() {
  const data = await getData()

  const link = Paths.news
  const pathToNewsToday = Paths.newsToday

  return (
    <>
      <MainTodayBlock data={data} link={link} />
      <TopNewsBlock
        data={data}
        blockTitle={'Новини, які можуть Вас зацікавити'}
        blockName={'ТОП новини від Дейком'}
        sliceStart={0}
        sliceEnd={12}
        slidesToShowStart={1}
        slidesToShowEnd={4}
        slidesToScrollStart={1}
        slidesToScrollEnd={4}
        link={link}
      />
      <SectionsBlock data={data} link={link} pathToNews={link} pathToNewsToday={pathToNewsToday} />
      <SinceBlock data={data} link={link} />
      <CultureBlock data={data} link={link} />
      <LineBlock data={data} link={link} />
      <SportBlock data={data} link={link} />
      <FiveCardBlock data={data} link={link} />
    </>
  )
}
