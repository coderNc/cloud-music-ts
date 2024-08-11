import React, { memo } from 'react'
import Banner from './c-cpns/banner'
import HotRecommend from './c-cpns/hot-recommend'
import PersonalRecommend from './c-cpns/personal-recommend'

const Recommend = memo(() => {
  return (
    <div>
      <Banner />
      <div className="m-auto flex h-[1000px] w-1100 items-center justify-start">
        <div className="h-full w-3/4 p-[20px]">
          <HotRecommend />
          <PersonalRecommend />
        </div>
        <div className="h-full w-1/4 bg-blue-700"></div>
      </div>
    </div>
  )
})

export default Recommend
