import { Image, Carousel } from 'antd'
import React, { memo, useState } from 'react'
import { useAppSelector } from '@/store'

const Banner = memo(() => {
  const [curBanner, setCurBanner] = useState<string>('')
  const { banners } = useAppSelector((state) => state.recommend)

  const contentStyle: React.CSSProperties = {
    height: '130px',
    color: '#fff',
    lineHeight: '130px',
    textAlign: 'center',
    background: '#364d79'
  }

  const beforeChange = (current: number, next: number) => {
    const url = banners[next].imageUrl + '?imageView&blur=40x20'
    setCurBanner(url)
  }

  return (
    <div
      className="h-310 bg-cover bg-center"
      style={{ backgroundImage: `url(${curBanner})` }}
    >
      <div className="m-auto flex h-full w-1100 items-center justify-start">
        <div className="h-full w-3/4">
          <Carousel autoplay arrows beforeChange={beforeChange}>
            {banners.map((item) => (
              <a
                className="block h-[130px] text-center leading-[130px] text-[#fff]"
                href={item.url ?? '#'}
                target="_blank"
                key={item.imageUrl}
              >
                <Image src={item.imageUrl} />
              </a>
            ))}
          </Carousel>
        </div>
        <div className="h-full w-1/4">
          <a
            className="block h-5/6 w-full bg-download"
            href="https://music.163.com/#/download"
            target="_blank"
          />
          <p className="block h-1/6 bg-color-bg-download text-center text-sml leading-10 text-color-8d8d8d">
            PC 安卓 iPhone WP iPad Mac 六大客户端
          </p>
        </div>
      </div>
    </div>
  )
})

export default Banner
