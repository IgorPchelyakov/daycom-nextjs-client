import Link from "next/link";
import { SectionPaths } from "./Paths";


export const section = (
    <div className="flex gap-14 text-base">
      <div className="flex flex-col">
        <Link href={SectionPaths.Ekolohiia}>Екологія</Link>
        <Link href={SectionPaths.Finance}>Фінанси</Link>
        <Link href={SectionPaths.Vlada}>Влада</Link>
        <Link href={SectionPaths.Sport}>Спорт</Link>
        <Link href={SectionPaths.History}>Історія</Link>
        <Link href={SectionPaths.Pryhody}>Пригоди</Link>
        <Link href={SectionPaths.Musick}>Музика</Link>
        <Link href={SectionPaths.Fashion}>Мода</Link>
        <Link href={SectionPaths.Kino}>Кіно</Link>
        <Link href={SectionPaths.Interviu}>Інтерв’ю</Link>
        <Link href={SectionPaths.Dumky}>Думка</Link>
        <Link href={SectionPaths.Auto}>Автомобілі</Link>
        <Link href={SectionPaths.Ihry}>Ігри</Link>
        <Link href={SectionPaths.Education}>Освіта</Link>
        <Link href={SectionPaths.Kulinariia}>Кулінарія</Link>
        <Link href={SectionPaths.Health}>Здоров’я</Link>
        <Link href={SectionPaths.Parenting}>Виховання дітей</Link>
        <Link href={SectionPaths.RealEstate}>Нерухомість</Link>
        <Link href={SectionPaths.Traveling}>Подорожі</Link>
      </div>
      <div className="flex flex-col">
        <Link href={SectionPaths.SvitoviNovyny}>Світові новини</Link>
        <Link href={SectionPaths.NorthAmerica}>Північна Америка</Link>
        <Link href={SectionPaths.SouthAmerica}>Південна Америка</Link>
        <Link href={SectionPaths.MiddleEast}>Близький схід</Link>
        <Link href={SectionPaths.PacificRegion}>Тихоокеанський регіон</Link>
        <Link href={SectionPaths.Africa}>Африка</Link>
        <Link href={SectionPaths.PresReliz}>Прес-релізи</Link>
        <Link href={SectionPaths.Ofitsijno}>Офіційні повідомлення</Link>
        <Link href={SectionPaths.NovynyBiznesu}>Новини бізнесу</Link>
        <Link href={SectionPaths.PolitychniNovyny}>Політичні новини</Link>
      </div>
    </div>
  );
  
  export const news = (
    <div className="flex flex-col">
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
  );
  
  export const society = (
    <div className="flex flex-col">
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
  );
  
  export const opinion = (
    <div className="flex flex-col">
      <Link href={SectionPaths.Dumky}>Думка</Link>
      <Link href={SectionPaths.Analityka}>Аналітика</Link>
    </div>
  );
  
  export const lifeStyle = (
    <div className="flex flex-col">
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
  );
  
  export const moreNews = (
    <div className="flex flex-col">
      <Link href={SectionPaths.PresReliz}>Прес-релізи</Link>
      <Link href={SectionPaths.Ofitsijno}>Офіційні повідомлення</Link>
      <Link href={SectionPaths.NovynyBiznesu}>Новини бізнесу</Link>
      <Link href={SectionPaths.PolitychniNovyny}>Політичні новини</Link>
    </div>
  );