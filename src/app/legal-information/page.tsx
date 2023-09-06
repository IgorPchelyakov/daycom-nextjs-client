import { CorpPaths } from "@/data/Paths"
import { Card, Image } from "antd"
import Link from "next/link"
import arrowLink from '@/assets/images/icons/ArrowLink.svg'
import { ArrowLeftOutlined } from "@ant-design/icons"

export default async function LegalInformation() {
    return (
        <>
          <div className="mx-auto mt-[30px] max-w-[1200px] px-[20px] xl:px-0">
        <div className="mb-7 border-b pb-7">
          <h2 className="mb-7 text-[30px] font-light leading-[34px]">
            Юридична інформація
          </h2>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Умови обслуговування</div>
              <Link href={`${CorpPaths.service}`} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Використання вмісту</div>
              <Link href={`${CorpPaths.content}`} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Умови продажу</div>
              <Link href={`${CorpPaths.termsOfSale}`} className="flex items-center">
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">Розділ коментарів</div>
              <Link
                href={`${CorpPaths.commentsSection}`}
                className="flex items-center"
              >
                <Image src={arrowLink.src} width={24} height={24} preview={false} alt={'Стрілка переходу'} />
                <p className="ml-4">Детальніше</p>
              </Link>
            </Card>
            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
              <div className="mb-7 border-b pb-7">
                Умови подання для читачів
              </div>
              <Link
                href={`${CorpPaths.presentaionForReaders}`}
                className="flex items-center"
              >
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
