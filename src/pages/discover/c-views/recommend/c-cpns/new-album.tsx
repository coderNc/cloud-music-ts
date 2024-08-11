import AlbumItem from '@/components/album-item'
import CardHeader from '@/components/card-header'
import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const albumRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbums } = useAppSelector((state) => state.recommend)
  const albumUrl = '/discover/album'
  return (
    <div>
      <CardHeader title="新碟上架" titlePath={albumUrl} morePath={albumUrl} />
      <div className="mb-[37px] mt-[20px] flex w-full items-center justify-between border-s-[#d3d3d3] bg-[#f5f5f5] p-[10px]">
        <div
          className="sprite_02 h-[17px] w-[17px] cursor-pointer !bg-[position:66%_16%]"
          onClick={() => albumRef.current?.prev()}
        ></div>
        <div className="h-[150px] w-[640px]">
          <Carousel ref={albumRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div className="!flex items-center justify-between" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumItem key={item.id} itemData={item} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 h-[17px] w-[17px] cursor-pointer !bg-[position:75%_16%]"
          onClick={() => albumRef.current?.prev()}
        ></div>
      </div>
    </div>
  )
}

export default memo(NewAlbum)
