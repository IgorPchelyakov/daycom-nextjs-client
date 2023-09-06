import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoWB from '@/assets/images/icons/logoWB.svg'
import { Paths, SectionPaths } from '@/data/Paths'

const LeftSideFooter: FC = () => {
    return (
        <div className="w-[280px] pr-4 xl:w-[970px] xl:border-r">
            <div className="items-center gap-10 pb-4 xl:mb-6 xl:flex xl:border-b">
                <Image
                    className="mb-4 xl:mb-0"
                    src={logoWB}
                    alt={'Логотип'}
                />
                <div className="flex flex-col justify-between gap-4 xl:flex-row xl:gap-10">
                    <Link href={Paths.news}>Стрічка новин</Link>
                    <Link href={Paths.newsToday}>Сьогоднішня газета</Link>
                    <Link href={Paths.home}>Перейти на домашню сторінку »</Link>
                </div>
                </div>
                <div className="hidden justify-between gap-10 xl:flex">
                <div className="flex flex-col gap-y-1">
                    <h3 className="mb-2 text-[14px] font-medium leading-[17px]">
                        Новини
                    </h3>
                    <Link href={SectionPaths.SvitoviNovyny}>Світові новини</Link>
                    <Link href={SectionPaths.USA}>Сполучені Штати</Link>
                    <Link href={SectionPaths.Europe}>Європа</Link>
                    <Link href={SectionPaths.China}>Китай</Link>
                    <Link href={SectionPaths.NorthAmerica}>Північна Америка</Link>
                    <Link href={SectionPaths.SouthAmerica}>Південна Америка</Link>
                    <Link href={SectionPaths.MiddleEast}>Близький схід</Link>
                    <Link href={SectionPaths.PacificRegion}>Тихоокеанський регіон</Link>
                    <Link href={SectionPaths.Africa}>Африка</Link>
                    <Link href={SectionPaths.Nauka}>Наука</Link>
                    <Link href={SectionPaths.Technologies}>Технології</Link>
                    <Link href={SectionPaths.Ekolohiia}>Екологія</Link>
                    <Link href={SectionPaths.Ekonomika}>Економіка</Link>
                    <Link href={SectionPaths.Finance}>Фінанси</Link>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h3 className="mb-2 text-[14px] font-medium leading-[17px]">
                        Суспільсво
                    </h3>
                    <Link href={SectionPaths.Vijna}>Війна Росії проти України</Link>
                    <Link href={SectionPaths.Suspilstvo}>Суспільство</Link>
                    <Link href={SectionPaths.Vlada}>Влада</Link>
                    <Link href={SectionPaths.Polityka}>Політика</Link>
                    <Link href={SectionPaths.Biznes}>Бізнес</Link>
                    <Link href={SectionPaths.Sport}>Спорт</Link>
                    <Link href={SectionPaths.History}>Історія</Link>
                    <Link href={SectionPaths.Pryhody}>Пригоди</Link>
                    <Link href={SectionPaths.Musick}>Музика</Link>
                    <Link href={SectionPaths.Fashion}>Мода</Link>
                    <Link href={SectionPaths.Kino}>Кіно</Link>
                    <Link href={SectionPaths.Interviu}>Інтерв’ю</Link>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h3 className="mb-2 text-[14px] font-medium leading-[17px]">
                        Думка
                    </h3>
                    <Link href={SectionPaths.Dumky}>Думка</Link>
                    <Link href={SectionPaths.Analityka}>Аналітика</Link>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h3 className="mb-2 text-[14px] font-medium leading-[17px]">
                        Спосіб життя
                    </h3>
                    <Link href={SectionPaths.Auto}>Автомобілі</Link>
                    <Link href={SectionPaths.Ihry}>Ігри</Link>
                    <Link href={SectionPaths.Education}>Освіта</Link>
                    <Link href={SectionPaths.Kultura}>Культура</Link>
                    <Link href={SectionPaths.Kulinariia}>Кулінарія</Link>
                    <Link href={SectionPaths.Health}>Здоров’я</Link>
                    <Link href={SectionPaths.Parenting}>Виховання дітей</Link>
                    <Link href={SectionPaths.RealEstate}>Нерухомість</Link>
                    <Link href={SectionPaths.Traveling}>Подорожі</Link>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h3 className="mb-2 text-[14px] font-medium leading-[17px]">
                        Більше
                    </h3>
                    <Link href={SectionPaths.PresReliz}>Прес-релізи</Link>
                    <Link href={SectionPaths.Ofitsijno}>Офіційні повідомлення</Link>
                    <Link href={SectionPaths.NovynyBiznesu}>Новини бізнесу</Link>
                    <Link href={SectionPaths.PolitychniNovyny}>Політичні новини</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftSideFooter