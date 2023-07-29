import { getTopBanners } from '@/service/recommend'
import React, { memo, useEffect, useState } from 'react'

const Discover = memo(() => {
  const [banners, setBanners] = useState<any[]>([])
  useEffect(() => {
    getTopBanners().then((res) => {
      setBanners(res.banners)
    })
  }, [])
  return (
    <div>
      {banners.map((item, index) => (
        <div key={index}>{item.imageUrl}</div>
      ))}
    </div>
  )
})

export default Discover
