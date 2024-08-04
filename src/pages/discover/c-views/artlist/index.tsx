import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ArtList: FC<IProps> = () => {
  return <div>ArtList</div>
}

export default memo(ArtList)
