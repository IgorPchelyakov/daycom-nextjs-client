import { CorpPaths } from "@/data/Paths"
import { Card, Image } from "antd"
import Link from "next/link"
import arrowLink from '@/assets/images/icons/ArrowLink.svg'
import { ArrowLeftOutlined } from "@ant-design/icons"

export default async function MoreAboutUs() {
    return (
        <>
            <div className="mx-auto mt-[30px] max-w-[1200px] px-[20px] xl:px-0">
        <Link
          href={CorpPaths.corporateSection}
          className="mb-7 block border-b pb-7 text-[12px] font-extralight leading-[14px]"
        >
            {/* <ArrowLeftOutlined className="mr-4" /> */}
          Повернутися до корпоративного розділу
        </Link>
        <div className="mb-7 border-b pb-7">
          <h2 className="mb-7 text-[30px] font-light leading-[34px]">
            Компанія
          </h2>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Компанія</div>
              <Link href={CorpPaths.aboutUs} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Покриття в Україні</div>
              <Link href={CorpPaths.mapsUa} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Розміщення реклами</div>
              <Link href={CorpPaths.advertising} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Угоди та партнерство</div>
              <Link href={CorpPaths.partnership} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Працюйте з нами</div>
              <Link href={CorpPaths.workWithUs} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Автори публікацій</div>
              <Link href={CorpPaths.editorship} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Підписка</div>
              <Link href={CorpPaths.subscription} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
          </div>
        </div>
      </div>
        </>
    )
}
