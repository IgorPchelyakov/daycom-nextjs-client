import { Paths } from '@/data/Paths'
import { News } from '@/types/news'
import { Author } from '@/types/user'
import { Image } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import s from './content.module.css'

interface NewsFreePlus {
    data: News
    author: Author
}

const NewsFreePlus: FC<NewsFreePlus> = ({
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
            <div className="mx-auto mb-6 flex w-full max-w-[600px] flex-col px-[20px] xl:border-b xl:px-0 xl:pb-5">
                <h1 className="mb-5 text-center text-[26px] leading-[31px]">
                    {data.title}
                </h1>
            </div>
            <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center">
                <div className="mb-5">
                    <Image
                    src={data.mainImage}
                    alt={data.mainImgDesc}
                    className={`object-cover ${
                        data.imageSize
                        ? 'max-h-[400px] min-h-[320px] min-w-[100%] max-w-[600px]'
                        : 'max-h-[800px] min-h-[320px] min-w-[100%] max-w-[1200px]'
                    }`}
                        />
                    <figcaption className="max-w-[750px] px-[20px] text-[12px] font-light leading-[15px] text-gray-500 xl:px-[0]">
                        {data.mainImgDesc} - {data.mainImgAuthor}
                    </figcaption>
                </div>
            </div>
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
        </>
    )
}

export default NewsFreePlus