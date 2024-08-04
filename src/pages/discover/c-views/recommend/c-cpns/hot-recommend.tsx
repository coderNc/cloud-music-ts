import CardHeader from '@/components/card-header'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps { 
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const keyword = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <div>
      <CardHeader
        title="热门推荐"
        titlePath="/discover/recommend"
        keyword={keyword}
        morePath="/discover/recommend"
      />
    </div>
  )
}

export default memo(HotRecommend)
