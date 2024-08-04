import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface ICardHeaderProps {
  cardInfo: object
  children?: ReactNode
}

const CardItem: FC<ICardHeaderProps> = (props) => {
  const { cardInfo } = props || {}
  return (
    <div className="flex h-[35px] items-center justify-between border-b-2 border-red-500"></div>
  )
}

export default memo(CardItem)
