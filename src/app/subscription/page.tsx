import { CorpPaths, Paths } from "@/data/Paths"
import { Button, Card } from "antd"
import Link from "next/link"
import { ArrowLeftOutlined } from "@ant-design/icons"

export default async function Subscription() {
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
            Підписка
          </h1>
          <p className="text-[16px] font-extralight leading-[19px]">
            Необмежений доступ до новин та формування власних теми за
            уподобанням. Повністю відсутні рекламні оголошення, аби Вас нічого
            не відволікало від читання.
          </p>
        </div>
        <div className="py-7">
          <h2 className="pb-4 text-[16px] font-semibold leading-[19px]"></h2>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            Ми стали надійним джерелом якісної незалежної журналістики, місія
            якої — шукати правду та допомагати нашим читачам. Вже маючи
            підписників на нашу продукцію та послуги, ми прагнемо аби наші
            читачі оформлювали цифрову підписку на Дейком і надалі.
          </p>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            Кожен новий підписник допомагає нам залишатися незалежними і
            цілеспрямовано виконувати свою роботу щодня. Таким чином читачі
            стають головними інвесторами у нашу роботу, і допомагають нам
            зменшувати обсяг реклами на сторінках ресурсу.
          </p>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            Перед оформленням цифрової підписки, пропонуємо ознайомитись із тим,
            як ми обробляємо та захищаемо ваші персональні данні:{' '}
            <Link href={`${CorpPaths.privacyPolitics}`} className="underline">
              Політика конфіденційності
            </Link>
            ,{' '}
            <Link className="underline" href={`${CorpPaths.termsOfSale}`}>
              Умови продажу
            </Link>
            ,{' '}
            <Link href={`${CorpPaths.cookiePolitics}`} className="underline">
              Політика щодо файлів cookie
            </Link>
            ,{' '}
            <Link href={`${CorpPaths.service}`} className="underline">
              Умови обслуговування
            </Link>
            .
          </p>
          <Card className="mb-6 rounded-none border-gray-800">
            <h2 className="border-b pb-4 text-[16px] font-semibold leading-[19px]">
              Щорічна підписка
            </h2>
            <p className="pb-8 pt-4 text-[12px] font-extralight leading-[14px]">
              Оформлюючи річну підписку, Ви сплачуєте один раз на рік і
              користуєтесь діючими умовами обслуговуваня за підпискою. Також,
              Вам будуть доступні будь-які інші переваги, що будуть з’являтися в
              майбутньому без зміни вартості цієї підписки на протязі року.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-medium leading-[14px]">
                Вартість: 24 $ / 1 платіж на рік
              </p>
              <Button disabled>Оформити підписку</Button>
            </div>
          </Card>
          <Card className="mb-6 rounded-none border-gray-800">
            <h2 className="border-b pb-4 text-[16px] font-semibold leading-[19px]">
              Щомісячна підписка
            </h2>
            <p className="pb-8 pt-4 text-[12px] font-extralight leading-[14px]">
              Оформлюючи місячну підписку, Ви сплачуєте щомісяця вартість
              підписки і користуєтесь діючими умовами обслуговуваня за
              підпискою. Також, Вам будуть доступні будь-які інші переваги, що
              будуть з’являтися в майбутньому без зміни вартості цієї підписки
              на протязі року.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-medium leading-[14px]">
                Вартість: 2 $ / 1 платіж на рік
              </p>
              <Button disabled>Оформити підписку</Button>
            </div>
          </Card>
          <Card className="mb-6 rounded-none border-gray-800">
            <h2 className="border-b pb-4 text-[16px] font-semibold leading-[19px]">
              Зробіть подарунок, який вони будуть відкривати щодня
            </h2>
            <p className="pb-8 pt-4 text-[12px] font-extralight leading-[14px]">
              Оформлюючи річну подарункову підписку для Ваших близьких, Ви
              сплачуєте один раз на рік і надаєте можливість користуватися
              діючими умовами обслуговуваня за підпискою. Також, Ваших близьких
              будуть доступні будь-які інші переваги, що будуть з’являтися в
              майбутньому без зміни вартості цієї підписки на протязі року.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-medium leading-[14px]">
                Вартість: 24 $ / 1 платіж на рік
              </p>
              <Button disabled>Оформити підписку</Button>
            </div>
          </Card>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            Повна вартість підписки стягується з покупця під час покупки і не
            підлягає поверненню.{' '}
          </p>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            {"Подарункові коди не підлягають заміні. Код дійсний лише для одноразового використання, не може бути об'єднаний з іншою пропозицією і не має грошової або накопичувальної вартості. Баланс після використання не зберігається."}
          </p>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            Отримувач подарункового коду не може застосувати його до існуючої
            підписки; він може бути застосований лише до нової підписки або
            іншого типу підписки. Період дії подарункової підписки починається з
            дня її використання одержувачем. Вартість будь-якого подарункового
            коду, залишеного незатребуваним після 1 року з дати видачі, буде
            передана Спонсору і після цього більше не може бути використана.
          </p>
          <p className="pb-4 text-[16px] font-extralight leading-[19px]">
            Одержувач подарункового коду повинен прийняти наші Умови надання
            послуг та визнати нашу Політику конфіденційності, щоб використати
            код. Можуть стягуватися податки. Умови пропозиції можуть бути
            змінені.
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
