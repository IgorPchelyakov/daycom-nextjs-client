import { News } from '@/types/news'
import { Author } from '@/types/user'
import { FC } from 'react'
import s from './content.module.css'
import dayjs from 'dayjs'
import { Image } from 'antd'
import Link from 'next/link'
import { Paths } from '@/data/Paths'

interface NewsPremium {
    data: News
    author: Author
}

const NewsPremium: FC<NewsPremium> = ({
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
                <div className="relative">
                    <Image
                        src={data.mainImage}
                        alt={data.mainImgDesc}
                        preview={false}
                        className="min-h-[400px] object-cover xl:max-h-[970px] xl:max-w-[1920px]"
                    />
                    <div className="absolute inset-0 max-h-[970px] min-h-[400px] min-w-[100%] max-w-[1920px] bg-black opacity-25"></div>
                    <div className="absolute bottom-[25px] left-[20px] right-[20px] max-w-[850px] text-white xl:bottom-[75px] xl:left-[50px]">
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
                <div className="ml-[50px] max-w-[860px] text-[12px] font-light leading-[15px] text-gray-500">
                    {data.mainImgDesc} - {data.mainImgAuthor}
                </div>
            </div>
            <div className="mx-auto flex max-w-[1200px] flex-col items-center">
                <div className="mx-auto mb-6 flex max-w-[800px] flex-col items-center">
                    <div className="mb-6 px-[20px] xl:border-t xl:px-0">
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

export default NewsPremium