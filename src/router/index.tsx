import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/pages/discover'))
// const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
// const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
// const Songs = lazy(() => import('@/views/discover/c-views/songs'))
// const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
// const Artist = lazy(() => import('@/views/discover/c-views/artist'))
// const Album = lazy(() => import('@/views/discover/c-views/album'))

const Mine = lazy(() => import('@/pages/mine'))
const Friend = lazy(() => import('@/pages/friend'))
const Download = lazy(() => import('@/pages/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
    // children: [
    //   {
    //     path: '/discover',
    //     element: <Navigate to="/discover/recommend" />
    //   },
    //   {
    //     path: '/discover/recommend',
    //     element: <Recommend />
    //   },
    //   {
    //     path: '/discover/ranking',
    //     element: <Ranking />
    //   },
    //   {
    //     path: '/discover/songs',
    //     element: <Songs />
    //   },
    //   {
    //     path: '/discover/djradio',
    //     element: <Djradio />
    //   },
    //   {
    //     path: '/discover/artist',
    //     element: <Artist />
    //   },
    //   {
    //     path: '/discover/album',
    //     element: <Album />
    //   }
    // ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
