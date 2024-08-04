import React, { memo, Suspense, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { navData } from '@/utils/constant'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction } from '@/store/modules/recommend'

const Discover = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [dispatch])

  const NavBar = () => {
    return (
      <div className="m-auto h-full w-[730px]">
        <div className="m- flex items-center justify-start">
          {navData.map((item) => {
            return (
              <div
                className="h-[34px] w-[84px] text-center leading-[26px]"
                key={item.title}
              >
                <NavLink
                  to={item.path}
                  className="inline-block h-[20px] rounded-[10px] bg-[#9B0909] px-[13px] text-[12px] leading-[21px] text-color-fff"
                >
                  {item.title}
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div className="h-[35px] w-full bg-[#c20c0c]">
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
})

export default Discover
