import { getTopBanners } from '@/service/recommend'
import { message, Image, Carousel } from 'antd'
import React, { memo, useEffect, useState } from 'react'

const Banner = memo(() => {
  const [banners, setBanners] = useState<any[]>([])

  const contentStyle: React.CSSProperties = {
    height: '130px',
    color: '#fff',
    lineHeight: '130px',
    textAlign: 'center',
    background: '#364d79'
  }

  useEffect(() => {
    getTopBanners().then((res) => {
      setBanners(res.banners)
    })
  }, [])
  return (
    <div className="flex h-full w-full items-center justify-start">
      <div className="h-full w-3/4">
        <Carousel autoplay arrows>
          {banners.map((item) => (
            <div style={contentStyle} key={item.imageUrl}>
              <Image src={item.imageUrl} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="h-80 w-1/4 bg-slate-700"></div>
    </div>
  )
})

export default Banner
