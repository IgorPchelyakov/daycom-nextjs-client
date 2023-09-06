import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import telegram from '@/assets/images/icons/telegram.svg'
import viber from '@/assets/images/icons/viber.svg'
import facebook from '@/assets/images/icons/facebook.svg'
import instagram from '@/assets/images/icons/instagram.svg'
import twitter from '@/assets/images/icons/twitter.svg'
import liqpay from '@/assets/images/icons/logo_liqpay.svg'
import visa from '@/assets/images/icons/Visa.svg'
import mastercard from '@/assets/images/icons/mastercard.svg'

const RightSideFooter: FC = () => {
    return (
        <div className="mt-4 w-[196px] xl:mt-0">
            <div className="flex flex-col">
                <div className="mb-2 text-[14px] font-medium leading-[17px]">
                    Підписка
                </div>
                <div className="mb-4 pb-4 xl:border-b">
                    <div className="mb-4 text-gray-500">Інформаційна розсилка</div>
                    <div className="text-gray-500">Цифрова підписка 2$</div>
                </div>
                <div className="mb-4 pb-4 xl:border-b">
                    <Link
                    href={'https://daycom.com.ua/maps-ua/'}
                    className="mb-4 block"
                    >
                    Покриття в Україні
                    </Link>
                    <div className="text-gray-500">Обліковий запис</div>
                </div>
                <div className="mb-6 text-gray-500">Мова: UA</div>
                <div className="mb-6 pb-4 xl:border-b">
                    <div className="mb-4 font-light text-gray-500">
                    Соціальні мережі
                    </div>
                    <div className="flex justify-between gap-2">
                    <Link
                        target={'_blank'}
                        href={'https://t.me/daycomua'}
                        className="transition-opacity hover:opacity-50"
                    >
                        <Image src={telegram} alt={''} />
                    </Link>
                    <Link
                        target={'_blank'}
                        className="transition-opacity hover:opacity-50"
                        href={
                        'https://invite.viber.com/?g2=AQAtlYpcKiouB07uDqixJWqL79MZICun%2BCk41tPSYbaplXRIGAVZyPzu8Rzp2oYt'
                        }
                    >
                        <Image src={viber} alt={''} />
                    </Link>
                    <Link
                        target={'_blank'}
                        className="transition-opacity hover:opacity-50"
                        href={'https://www.facebook.com/daycom.ua'}
                    >
                        <Image src={facebook} alt={''} />
                    </Link>
                    <Link
                        target={'_blank'}
                        className="transition-opacity hover:opacity-50"
                        href={'https://instagram.com/daycom.ua'}
                    >
                        <Image src={instagram} alt={''} />
                    </Link>
                    <Link
                        target={'_blank'}
                        className="transition-opacity hover:opacity-50"
                        href={'https://twitter.com/daycom_ua'}
                    >
                        <Image src={twitter} alt={''} />
                    </Link>
                    </div>
                </div>
                <div className="flex justify-between gap-2">
                    <Image src={liqpay} alt={''} />
                    <Image src={visa} alt={''} />
                    <Image src={mastercard} alt={''} />
              </div>
            </div>
        </div>
    )
}

export default RightSideFooter