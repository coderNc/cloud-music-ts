import CardHeader from '@/components/card-header'
import CardItem from '@/components/card-item'
import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector((state) => state.recommend)
  const keyword = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <div>
      <CardHeader
        title="热门推荐"
        titlePath="/discover/recommend"
        keyword={keyword}
        morePath="/discover/recommend"
      />
      <div className="flex flex-wrap justify-between">
        {hotRecommends.slice(0, 8).map((item) => {
          return <CardItem cardInfo={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default memo(HotRecommend)
