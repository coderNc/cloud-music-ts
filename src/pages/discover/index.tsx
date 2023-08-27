import { getTopBanners } from '@/service/recommend'
import { Button, Modal, QRCode, message, Image } from 'antd'
import React, { memo, useEffect, useState } from 'react'

const Discover = memo(() => {
  const [banners, setBanners] = useState<any[]>([])
  const [messageApi, contextHolder] = message.useMessage()

  const success = (str: string) => {
    messageApi.open({
      type: 'success',
      content: str
    })
  }
  useEffect(() => {
    getTopBanners().then((res) => {
      setBanners(res.banners)
    })
  }, [])
  return (
    <div>
      {/* {banners.map((item, index) => (
        <div key={index}>{item.imageUrl}</div>
      ))} */}

      <div style={{ color: '#bfc', margin: 'auto 0' }}>
        <h1 onClick={() => message.success(<span>我爱丫头</span>)}>
          我爱丫头哦
        </h1>
      </div>
    </div>
  )
})

export default Discover
