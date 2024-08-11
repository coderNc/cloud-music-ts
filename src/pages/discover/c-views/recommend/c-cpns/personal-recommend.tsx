import CardHeader from '@/components/card-header'
import CardItem from '@/components/card-item'
import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PersonalRecommend: FC<IProps> = () => {
  const { personalRecommends } = useAppSelector((state) => state.recommend)
  return (
    <div>
      <CardHeader title="个性化推荐" />
      <div className="flex flex-wrap justify-between">
        {personalRecommends.slice(0, 4).map((item) => {
          return <CardItem cardInfo={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default memo(PersonalRecommend)
