import { FC } from 'react'
import Link from 'next/link'
import { CorpPaths } from '@/data/Paths'

const CorpLinks: FC = () => {
    return (
        <div className="hidden items-center justify-center gap-4 border-b pb-6 text-[12px] leading-[15px] xl:flex">
            <Link href={`${CorpPaths.service}`}>Умови обслуговування</Link>
            <Link href={`${CorpPaths.editorialPolitics}`}>Редакційна політика</Link>
            <Link href={`${CorpPaths.privacyPolitics}`}>Політика конфіденційності</Link>
            <Link href={`${CorpPaths.cookiePolitics}`}>
                Політика щодо файлів cookie
            </Link>
            <Link href={`${CorpPaths.workWithUs}`}>Працюйте з нами</Link>
            <Link href={`${CorpPaths.advertising}`}>Розміщення реклами</Link>
            <Link href={`${CorpPaths.corporateSection}`}>Корпоративний розділ</Link>
        </div>
    )
}

export default CorpLinks