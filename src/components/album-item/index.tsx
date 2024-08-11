import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { getImageSize } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { Albums } from '@/utils/types/recommend'

interface IProps {
  children?: ReactNode
  itemData: Albums
}

const AlbumItem: FC<IProps> = (props) => {
  const navigate = useNavigate()
  const { itemData } = props
  const { name, picUrl, artist, id } = itemData
  const gotoAlbum = () => {
    navigate(`/discover/album/?id=${id}`)
  }

  return (
    <div className="h-full w-[140px]" onClick={gotoAlbum}>
      <div className="relative mt-[15px] h-[100px] w-[118px] overflow-hidden">
        <img
          className="h-[110px] w-[110px]"
          src={getImageSize(picUrl, 120)}
          alt=""
        />
        <a className="sprite_cover absolute bottom-0 left-0 right-0 top-0 !bg-[position:0%_41%]" />
      </div>
      <div className="w-[110px] text-[12px]">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[#000]">
          {name}
        </div>
        <div className="text-[#666]">{artist.name}</div>
      </div>
    </div>
  )
}

export default memo(AlbumItem)
