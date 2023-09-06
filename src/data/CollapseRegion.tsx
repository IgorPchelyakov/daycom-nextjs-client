import Link from "next/link";
import { 
    RegionKyivPaths,
    RegionOdesaPaths,
    RegionDniproPaths,
} from "./Paths";

export const regionKyiv = (
    <div className="flex w-[250px] flex-col">
      <Link href={RegionKyivPaths.kyivHome}>Київ</Link>
      <Link href={RegionKyivPaths.bilacerkvaHome}>Біла Церква</Link>
      <Link href={RegionKyivPaths.brovaryHome}>Бровари</Link>
      <Link href={RegionKyivPaths.boryspilHome}>Бориспіль</Link>
      <Link href={RegionKyivPaths.fastivHome}>Фастів</Link>
      <Link href={RegionKyivPaths.irpinHome}>Ірпінь</Link>
      <Link href={RegionKyivPaths.vasylkivHome}>Васильків</Link>
      <Link href={RegionKyivPaths.boyarkaHome}>Боярка</Link>
      <Link href={RegionKyivPaths.vyshhorodHome}>Вишневе</Link>
      <Link href={RegionKyivPaths.obukhivHome}>Обухів</Link>
      <Link href={RegionKyivPaths.pereyaslavHome}>Переяслав</Link>
      <Link href={RegionKyivPaths.buchaHome}>Буча</Link>
      <Link href={RegionKyivPaths.slavutychHome}>Славутич</Link>
      <Link href={RegionKyivPaths.yagotynHome}>Яготин</Link>
      <Link href={RegionKyivPaths.vyshhorodHome}>Вишгород</Link>
      <Link href={RegionKyivPaths.skvyraHome}>Сквира</Link>
      <Link href={RegionKyivPaths.berezanHome}>Березань</Link>
    </div>
);

export const regionOdesa = (
    <div className="flex w-[250px] flex-col">
      <Link href={RegionOdesaPaths.odesaHome}>Одеса</Link>
      <Link href={RegionOdesaPaths.izmailHome}>Ізмаїл</Link>
      <Link href={RegionOdesaPaths.chornomorskHome}>Чорноморськ</Link>
      <Link href={RegionOdesaPaths.bilgorodDnistrovskyHome}>Білгород-Дністровський</Link>
      <Link href={RegionOdesaPaths.podilskHome}>Подільськ</Link>
      <Link href={RegionOdesaPaths.youzhneHome}>Южне</Link>
      <Link href={RegionOdesaPaths.kiliyaHome}>Кілія</Link>
    </div>
);

export const regionDniprovska = (
    <div className="flex w-[250px] flex-col">
      <Link href={RegionDniproPaths.dniproHome}>Дніпро</Link>
      <Link href={RegionDniproPaths.kryvyiRihHome}>Кривий Ріг</Link>
      <Link href={RegionDniproPaths.kamianskeHome}>{"Кам'янське"}</Link>
      <Link href={RegionDniproPaths.nikopolHome}>Нікополь</Link>
      <Link href={RegionDniproPaths.pavlogradHome}>Павлоград</Link>
      <Link href={RegionDniproPaths.novomoskovskHome}>Новомосковськ</Link>
      <Link href={RegionDniproPaths.zhovtiVodyHome}>Жовті Води</Link>
      <Link href={RegionDniproPaths.marganetsHome}>Марганець</Link>
      <Link href={RegionDniproPaths.pokrovHome}>Покров</Link>
      <Link href={RegionDniproPaths.sinelnikovoHome}>Синельникове</Link>
      <Link href={RegionDniproPaths.ternivkaHome}>Тернівка</Link>
      <Link href={RegionDniproPaths.pershotravenskHome}>Першотравенськ</Link>
      <Link href={RegionDniproPaths.vilnohorskHome}>Вільногірськ</Link>
      <Link href={RegionDniproPaths.pyatihatkyHome}>{"П'ятихатки"}</Link>
    </div>
  );