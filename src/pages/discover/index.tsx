import React, { memo, useEffect, useState } from 'react'
import { message } from 'antd'
import Banner from './c-components/banner'

const Discover = memo(() => {
  return (
    <div className="m-auto h-32 w-1100">
      <Banner />

      <div style={{ color: '#bfc', margin: 'auto 0' }}>
        <h1 onClick={() => message.success(<span>我爱丫头</span>)}>
          我爱丫头哦
        </h1>
      </div>
    </div>
  )
})

export default Discover
