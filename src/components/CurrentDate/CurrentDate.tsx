import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/uk'
dayjs.locale('uk')

const CurrentDate = ({
    location
}: {
    location: string
}) => {
  return (
    <div className='text-base'>
      {dayjs().format(`${location}, dddd, DD MMMM YYYY`)}
    </div>
  )
}

export default CurrentDate