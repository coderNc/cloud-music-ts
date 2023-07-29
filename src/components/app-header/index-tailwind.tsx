import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import headerData from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: { title: any; type: any; link: any }) => {
    return item.type === 'path' ? (
      <NavLink
        to={item.link}
        className={({ isActive }) => {
          return isActive ? 'active' : undefined
        }}
      >
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    ) : (
      <a href={item.link} className="" rel="noreferrer" target="_blank">
        {item.title}
      </a>
    )
  }

  return (
    <div className="h-[75px] bg-color-bg-header-block text-sm text-color-fff">
      <div className="mx-auto flex w-1100 justify-between">
        <div className="flex">
          <a
            className="block h-[70px] w-[176px] bg-sprite_01 bg-00 indent-[-9999px]"
            href="/"
          >
            网易云音乐
          </a>
          <div className="flex leading-70">
            {headerData.map((item) => {
              return (
                <div className="relative" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AppHeader)
