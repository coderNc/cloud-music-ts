import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { formatToWan } from '@/utils'
import { useNavigate } from 'react-router-dom'

interface ICardHeaderProps {
  cardInfo: {
    picUrl: string
    name: string
    playCount?: number
    playcount?: number
    id: number
  }
  children?: ReactNode
}

const CardItem: FC<ICardHeaderProps> = (props) => {
  const navigate = useNavigate()
  const { cardInfo } = props || {}
  const { picUrl, name, playCount, playcount, id } = cardInfo || {}
  const count = playCount || playcount

  const gotoPlayList = () => {
    navigate(`/discover/playlist/?id=${id}`)
  }
  return (
    <div className=" h-max-[200px] mb-[30px] mr-[10px] w-[150px] overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative" onClick={gotoPlayList}>
        <img src={picUrl} alt={''} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-4 opacity-100">
          <p className="text-[12px] text-[#b9b9b9]">
            {count && formatToWan(count)}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 p-4 opacity-50">
          <button className="rounded-full bg-white p-2">
            <svg
              className="h-[10px] w-[10px] text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <a
        className="block p-[8px] text-[14px] text-black"
        onClick={gotoPlayList}
      >
        {name}
      </a>
    </div>
  )
}

export default memo(CardItem)
