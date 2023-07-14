import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Discover from '@/pages/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />
  }
]
export default routes
