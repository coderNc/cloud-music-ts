import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import headerData from '@/assets/data/header_titles.json'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import LoginModal from '../login-modal'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const [open, setOpen] = useState(false)
  const handleLogin = () => {
    setOpen(true)
  }

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
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerData.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <a className="login" onClick={handleLogin}>
            登录
          </a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      <LoginModal open={open} handleCancel={() => setOpen(false)} />
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
