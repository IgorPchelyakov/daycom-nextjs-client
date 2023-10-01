import { CorpPaths } from "@/data/Paths"
import { Card, Image } from "antd"
import Link from "next/link"
import arrowLink from '@/assets/images/icons/ArrowLink.svg'
import { ArrowLeftOutlined } from "@ant-design/icons"
import AuthorCard from "@/components/UI/AuthorCard"
import { Author } from "@/types/user"

async function getData() {
  const res = await fetch('https://sside.daycom.com.ua/api/authors')
  return res.json()
}

export default async function Editorship() {
    const data: Author[] = await getData()

    return (
        <>
            <div className="mx-auto mt-[30px] max-w-[1200px] px-[20px] xl:px-0">
        <Link
          href={`${CorpPaths.corporateSection}`}
          className="block pb-7 text-[12px] font-extralight leading-[14px]"
        >
          {/* <ArrowLeftOutlined className="mr-4" /> */}
          Повернутися до корпоративного розділу
        </Link>
        <div className="border-y py-7">
          <h1 className="pb-7 text-[30px] font-light leading-[36px]">
            Автори публікацій
          </h1>
          <p className="text-[16px] font-extralight leading-[19px]">
            Щоб створювати нашу фірмову журналістику та динамічні продукти, які
            відрізняються від інших, нам потрібні найкращі таланти у світі. В
            Дейком працюють журналісти, розробники, стратеги, відеооператори,
            маркетологи, арт-директори та багато інших. Ми цінуємо
            співробітників на всіх етапах їхньої кар’єри, які привносять різні
            точки зору та досвід до Дейком.
          </p>
        </div>
        <div className="my-7 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
          {data &&
            data.map((data: Author) => (
              <AuthorCard key={data.id} avatarUrl={data.avatarUrl || ''} nickName={data.nickName} descUser={data.descUser || ''}/>
            ))}
        </div>
      </div>
        </>
    )
}
