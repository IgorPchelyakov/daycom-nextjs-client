import { FC } from 'react'
import Image from 'next/image'
import WM from '@/assets/images/icons/WaterMark.svg'

const Copyright: FC = () => {
    return (
        <div className="flex flex-col items-center gap-4 px-[20px] pt-6 xl:px-0">
            <p className="text-center text-[10px] font-light leading-[12px] text-gray-500">
                {`Дозволяється цитування матеріалів опублікованих на веб-сайті без 
                отримання попередньої згоди головної редакції за умови розміщення у 
                тексті обов'язкового посилання на daycom.com.ua. Для інтернет-видань 
                обов'язково розміщення прямого, відкритого для пошукових систем 
                гіперпосилання на статті та/або інший опублікований маетріал, що цитуються. 
                Обов’язкова умова розміщення відкритого для пошукових систем гіперпосилання 
                не нижче другого абзацу в тексті або як джерело. Порушення авторських та 
                виняткових прав переслідується згідно із законодавством України.`}
            </p>
            <p className="text-center text-[10px] font-light leading-[12px] text-gray-500">
                Copyright © Газета Дейком. Всі права захищено.
            </p>
            <Image src={WM} alt='Водяній знак' />
        </div>
    )
}

export default Copyright