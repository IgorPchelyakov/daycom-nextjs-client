import { Author } from '@/types/user'
import { Image } from 'antd'
import { FC } from 'react'

interface IAuthorCard {
    key: string | number
    avatarUrl: string
    nickName: string
    descUser: string
}

const AuthorCard: FC<IAuthorCard> = ({
    key,
    avatarUrl,
    nickName,
    descUser
}) => {
  return (
    <div key={key}>
      <Image
        src={avatarUrl}
        className="min-h-[350px] min-w-full rounded-md object-cover xl:min-h-[350px] xl:min-w-[285px]"
        alt={`Фотографія автора ${nickName}`}
      />
      <div className="text-[16px] font-light leading-[19px]">
        {nickName}
      </div>
      <div className="text-[14px] font-extralight leading-[16px]">
        {descUser}
      </div>
    </div>
  )
}

export default AuthorCard