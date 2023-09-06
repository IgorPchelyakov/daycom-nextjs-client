import { CorpPaths } from "@/data/Paths"
import { Card, Image } from "antd"
import Link from "next/link"
import aboutCompany from '@/assets/images/wallpaper/corporate.png'
import arrowDown from '@/assets/images/icons/ArrowDown.svg'
import arrowLink from '@/assets/images/icons/ArrowLink.svg'

export default async function CorporateSection() {
    return (
        <>
            <div className="max-w-[1920px]">
                <div className="relative">
                    <Image
                        className="min-h-[400px] object-cover"
                        src={aboutCompany.src}
                        preview={false}
                        alt={'Про компанію'}
                    />
                    <h1 className="absolute bottom-[80px] left-[20px] max-w-[1000px] pr-4 text-[24px]
                        font-extralight leading-[30px] text-white xl:bottom-[150px] xl:left-[50px] xl:text-[40px] xl:leading-[48px]"
                    >
                        Знайомтесь із Дейком читайте нашу політику та іншу інформацію від
                        нас
                    </h1>
                    <div className="absolute bottom-[50px] w-full border-b border-gray-500 xl:bottom-[125px]"></div>
                    <div className="absolute bottom-[10px] left-[20px] xl:bottom-[50px] xl:left-[75px]">
                        <Image src={arrowDown.src} preview={false} alt={'Стрілка вниз'}/>
                    </div>
                </div>
                <div className="mx-auto mt-[30px] max-w-[1200px] px-[20px] xl:px-0">
                    <div className="mb-7 justify-between gap-7 border-b pb-7 xl:flex">
                        <Card className="mb-4 w-full xl:mb-0">
                            <div className="text-[58px] font-extralight leading-[68px]">
                                210
                            </div>
                            <div className="text-[16px] font-light leading-[19x]">
                                Міст України в яких ми працюємо
                            </div>
                        </Card>
                        <Card className="mb-4 w-full xl:mb-0">
                            <div className="text-[58px] font-extralight leading-[68px]">
                                100 +
                            </div>
                            <div className="text-[16px] font-light leading-[19x]">
                                Країн, в яких нас читають сьогодні
                            </div>
                        </Card>
                        <Card className="w-full">
                            <div className="text-[58px] font-extralight leading-[68px]">
                                2021
                            </div>
                            <div className="text-[16px] font-light leading-[19x]">
                                Рік заснування Дейком
                            </div>
                        </Card>
                    </div>
                    <div className="mb-7 border-b pb-7">
                        <h2 className="mb-7 text-[30px] font-light leading-[34px]">
                            Компанія
                        </h2>
                        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Компанія</div>
                                <Link href={CorpPaths.aboutUs} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Покриття в Україні</div>
                                <Link href={CorpPaths.mapsUa} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Розміщення реклами</div>
                                <Link href={CorpPaths.advertising} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Угоди та партнерство</div>
                                <Link href={CorpPaths.partnership} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Працюйте з нами</div>
                                <Link href={CorpPaths.workWithUs} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Автори публікацій</div>
                                <Link href={CorpPaths.editorship} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Підписка</div>
                                <Link href={CorpPaths.subscription} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                        </div>
                    </div>
                    <div className="mb-7 border-b pb-7">
                        <h2 className="mb-7 text-[30px] font-light leading-[34px]">
                            Наша політика
                        </h2>
                        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Політика конфіденційності</div>
                                <Link href={CorpPaths.privacyPolitics} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Редакційна політика</div>
                                <Link href={CorpPaths.editorialPolitics} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Політика щодо файлів cookie</div>
                                <Link href={CorpPaths.cookiePolitics} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Соціальна відповідальність</div>
                                <Link href={'/'} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                        </div>
                    </div>
                    <div className="mb-7 border-b pb-7">
                        <h2 className="mb-7 text-[30px] font-light leading-[34px]">
                            Юридична інформація
                        </h2>
                        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Умови обслуговування</div>
                                <Link href={CorpPaths.service} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Використання вмісту</div>
                                <Link href={CorpPaths.content} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Умови продажу</div>
                                <Link href={CorpPaths.termsOfSale} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Розділ коментарів</div>
                                <Link href={CorpPaths.commentsSection} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                            <Card className="bg-gray-700 text-[22px] leading-[26px] text-white transition-all hover:bg-gray-900">
                                <div className="mb-7 border-b pb-7">Умови подання для читачів</div>
                                <Link href={CorpPaths.presentaionForReaders} className="flex items-center">
                                    <Image
                                        src={arrowLink.src}
                                        width={24}
                                        height={24}
                                        preview={false}
                                        alt={'Стрілка переходу'}
                                    />
                                    <p className="ml-4">Детальніше</p>
                                </Link>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
