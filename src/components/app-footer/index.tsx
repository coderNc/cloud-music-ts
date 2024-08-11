import React, { memo, Fragment } from 'react'
import type { FC, ReactNode } from 'react'
import { footerLinks, footerImages } from '@/utils/constant'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <div className="mt-[40px] h-[172px] border-t border-s-[#d3d3d3] bg-[#f2f2f2] text-[#666]">
      <div className="wrap-v2 flex items-center justify-between">
        <div className="pt-[15px] leading-[24px]">
          <div className="link">
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <a
                    className="text-[#999]"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                  <span className="mx-[10px] text-[#999]">|</span>
                </Fragment>
              )
            })}
          </div>
          <div className="copyright">
            <span className="mr-[15px]">网易公司版权所有©1997-2024</span>
            <span className="mr-[15px]">
              杭州乐读科技有限公司运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="info">
            <span>粤B2-20090191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank"
            >
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </div>
        <div className="flex">
          {footerImages.map((item) => {
            return (
              <li
                className="mr-[40px] flex flex-col items-center"
                key={item.link}
              >
                <a
                  className="block h-[45px] w-[50px]"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                </a>
              </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(AppFooter)
