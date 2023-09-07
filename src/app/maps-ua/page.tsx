import { CorpPaths, Paths } from "@/data/Paths"
import Link from "next/link"
import { ArrowLeftOutlined } from "@ant-design/icons"

export default async function MapsUa() {
    return (
        <>
            <div className="mx-auto mt-[30px] max-w-[600px] px-[20px] xl:px-0">
        <Link
          href={`${CorpPaths.corporateSection}`}
          className="block pb-7 text-[12px] font-extralight leading-[14px]"
        >
          {/* <ArrowLeftOutlined className="mr-4" /> */}
          Повернутися до корпоративного розділу
        </Link>
        <div className="border-y py-7">
          <h1 className="pb-7 text-[30px] font-light leading-[36px]">
            Покриття в Україні
          </h1>
          <p className="text-[16px] font-extralight leading-[19px]">
            Двісті десять українських міст у двадцяти п’яти областях України в
            яких ми працюємо аби наші читачі отримували найголовніші новини
            щодня.
          </p>
        </div>
        <div className="py-7">
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            КИЇВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Київ, Біла Церква, Бровари, Бориспіль, ФастівІрпінь, Васильків,
            Боярка, Вишневе, Обухі, Переяслав, Буча, Славутич, Яготин, Вишгород,
            Сквира, Березань
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЖИТОМИРСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Житомир, Бердичів, Новоград-Волинський, Малин, Коростень, Коростишів
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЧЕРНІГІВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Чернігів, Ніжин, Прилуки, Бахмач
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЧЕРКАСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Черкаси, Умань, Сміла, Золотоноша, Канів, Ватутіне, Звенигородка
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ДНІПРОПЕТРОВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            {"Дніпро, Кривий Ріг, Кам'янське, Нікополь, Павлоград, Новомосковськ, Жовті Води, Марганець, Покров, Синельникове, Тернівка, Першотравенськ, Вільногірськ, П'ятихатки"}
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ПОЛТАВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Полтава, Кременчук, Лубни, Горішні Плавні, Миргород, Гадяч
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            СУМСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Суми, Конотоп, Шостка, Охтирка, Ромни, Глухів, Лебедин, Кролевець,
            Тростянець
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ОДЕСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Одеса, Ізмаїл, Чорноморськ, Білгород-Дністровський, Подільськ, Южне,
            Кілія
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ВІННИЦЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Вінниця, Жмеринка, Могилів-Подільський, Козятин, Гайсин, Хмільник,
            Ладижин
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            КІРОВОГРАДСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            {"Кропивницький, Олександрія, Світловодськ, Знам'янка"}
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ХЕРСОНСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Херсон, Нова Каховка, Каховка, Олешки, Генічеськ, Скадовськ
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            МИКОЛАЇВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Миколаїв, Первомайськ, Вознесенськ, Южноукраїнськ
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ВОЛИНСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Луцьк, Ковель, Нововолинськ, Володимир-Волинський
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЗАКАРПАТСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Ужгород, Мукачево, Хуст, Берегове, Виноградів
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ІВАНО-ФРАНКІВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Івано-Франківськ, Калуш, Коломия, Долина, Надвірна
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЛЬВІВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Львів, Дрогобич, Червоноград, Стрий, Борислав, Самбір, Новий Розділ,
            Новояворівськ, Золочів, Броди, Трускавець, Сокаль, Стебник
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            РІВНЕНСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Рівне, Вараш, Дубно, Костопіль, Сарни, Здолбунів
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ТЕРНОПІЛЬСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Тернопіль, Чортків, Кременець
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ХМЕЛЬНИЦЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            {"Хмельницький, Кам'янець-Подільський, Шепетівка, Старокостянтинів, Славута, Нетішин, Полонне, Волочиськ, Красилів, Чернівці"}
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ДОНЕЦЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            {"Маріуполь, Краматорськ, Слов'янськ, Єнакієве, Костянтинівка, Покровськ, Дружківка, Харцизьк, Шахтарськ, Сніжне, Мирноград, Добропілля, Донецьк, Макіївка, Горлівка, Торецьк, Авдіївка, Лиман,Селидове, Волноваха, Докучаєвськ, Амвросіївка, Курахове, Бахмут"}
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЗАПОРІЗЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Запоріжжя, Мелітополь, Бердянськ, Енергодар, Токмак, Пологи,
            Дніпрорудне
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ХАРКІВСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            {"Харків, ЛозоваІзюм, Чугуїв, Первомайський, Куп'янськ, Балаклія, Мерефа, Красноград, Люботин, Вовчанськ, Дергачі"}
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">
            ЛУГАНСЬКА ОБЛАСТЬ
          </h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Сєвєродонецьк, Лисичанськ, Рубіжне, Первомайськ, Луганськ,
            Хрустальний, Алчевськ, Кадіївка, Довжанськ, Антрацит, Брянка,
            Ровеньки, Сорокине, Голубівка, Перевальськ, Попасна,
            Молодогвардійськ, Кремінна, Суходільськ
          </p>
          <h2 className="pb-4 text-[16px] font-light leading-[16px]">КРИМ</h2>
          <p className="pb-4 text-[14px] font-light leading-[16px]">
            Сімферополь, Керч, Євпаторія, Ялта, Феодосія, Джанкой,
            Красноперекопськ, Алушта, Саки, Бахчисарай, Армянськ
          </p>
        </div>
        <div className="pb-7 text-[12px] font-extralight leading-[14px] text-gray-500">
          <p>
            Інформація на цій сторінці опублікована 1 вересня 2022 року,
            оновлення опублікованої інформації відсутні. |{' '}
            <Link href={`${CorpPaths.corporateSection}`} className="underline">
              Корпоративний розділ
            </Link>{' '}
            |{' '}
            <Link href={`${Paths.news}`} className="underline">
              Стрічка новин
            </Link>{' '}
            |{' '}
            <Link href={`${Paths.newsToday}`} className="underline">
              Сьогоднішня газета
            </Link>
          </p>
        </div>
      </div>
        </>
    )
}
