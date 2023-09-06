import { Paths } from '@/data/Paths'
import { News } from '@/types/news'
import { Author } from '@/types/user'
import { Image } from 'antd'
import s from './content.module.css'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'

interface NewsPremiumBlack {
    data: News
    author: Author
}

const NewsPremiumBlack: FC<NewsPremiumBlack> = ({
    data,
    author
}) => {
    const nick = author?.nickName;
    const authorDesc = author?.descUser;
    const createdAt = dayjs(data.createdAt)
    const updatedAt = dayjs(data.publishedAt)

    let updateText = ''
    if (createdAt.isSame(updatedAt, 'day')) {
        updateText = `оновлення ${updatedAt.format('DD.MM.YYYY')}`
    } else {
        updateText = 'оновлення відсутні'
    }

    return (
        <>
            <div>
                <div className="relative flex">
                    <div className="flex items-center justify-center bg-black xl:w-1/2">
                        <div className="max-w-[720px] p-6 text-center text-white">
                        <h1 className="mb-3 text-[26px] font-extralight leading-[29px] xl:mb-5 xl:text-[40px] xl:leading-[48px]">
                            {data.title}
                            </h1>
                            {data.showDesc && (
                            <h2 className="text-[16px] font-extralight leading-[18px] xl:text-[24px] xl:leading-[29px]">
                                {data.desc}
                            </h2>
                            )}
                        </div>
                    </div>
                    <div className="xl:w-1/2">
                        <Image
                            className="min-h-[400px] object-cover xl:max-h-[970px] 
                                xl:min-h-[970px] xl:max-w-[1920px]"
                            src={data.mainImage}
                            alt={data.mainImgDesc}
                            preview={false}
                        />
                        <div className="absolute right-[15px] max-w-[860px] text-right text-[12px] font-light leading-[15px] text-gray-500">
                            {data.mainImgDesc} - {data.mainImgAuthor}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center">
                <div className="mx-auto mb-6 flex max-w-[800px] flex-col items-center border-t">
                    <div className="mb-6 px-[20px] xl:px-0">
                    <div
                            className={s.content}
                            dangerouslySetInnerHTML={{ __html: data.content }}>
                        </div>
                        <div className={s.content}>
                            <h4>
                                {data.showAuthor === true && nick}{' '}
                                {data.showAuthorDesc === true && <>- {authorDesc}</>}
                            </h4>
                            <h4>
                                Цей матеріал опубліковано{' '}
                                {dayjs(data.publishedAt).format('DD.MM.YYYY')} року, {updateText},
                                розділ {data.section}, із заголовком: {data.title}. |{' '}
                                <Link href={Paths.newsToday} className="underline">
                                    Сьогоднішня газета
                                </Link>{' '}
                                |{' '}
                                <Link href={Paths.news} className="underline">
                                    Стрічка новин
                                </Link>{' '}
                                |{' '}
                                <Link
                                    href={'https://daycom.com.ua/subscription/'}
                                    className="underline"
                                >
                                    Підпишіться
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPremiumBlack