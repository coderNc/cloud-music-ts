import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface ICardHeaderProps {
  title: string
  titlePath?: string
  keyword?: string[]
  morePath?: string
  children?: ReactNode
}

const CardHeader: FC<ICardHeaderProps> = (props) => {
  const { title, titlePath, keyword, morePath } = props || {}
  return (
    <div className="mb-[30px] flex h-[35px] items-center justify-between border-b-2 border-red-500">
      <div className="flex h-full items-center justify-start">
        <div className="h-full w-[30px] bg-sprite_02 bg-[position:58%_36%]"></div>
        <div className="text-[20px] leading-[28px]">
          {titlePath ? <a href={titlePath}>{title}</a> : title}
        </div>
        <div className="flex h-full items-center justify-start">
          {keyword?.map((item, index) => {
            return (
              <div key={index}>
                <a className="m-[10px] text-[12px] text-[#666]">{item}</a>
                {index === keyword.length - 1 ? null : <span>|</span>}
              </div>
            )
          })}
        </div>
      </div>
      {morePath ? (
        <div className="flex h-full items-center justify-end">
          <a
            className="block text-center text-[12px] text-[#666]"
            href={morePath}
          >
            更多
          </a>
          <div className="h-full w-[30px] bg-sprite_02 bg-[position:-1%_53%]"></div>
        </div>
      ) : null}
    </div>
  )
}

export default memo(CardHeader)
