import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/pages/discover'))
const Recommend = lazy(() => import('@/pages/discover/c-views/recommend'))
const PlayList = lazy(() => import('@/pages/discover/c-views/playlist'))
const TopList = lazy(() => import('@/pages/discover/c-views/toplist'))
const Djradio = lazy(() => import('@/pages/discover/c-views/djradio'))
const ArtList = lazy(() => import('@/pages/discover/c-views/artlist'))
const Album = lazy(() => import('@/pages/discover/c-views/album'))

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
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/toplist',
        element: <TopList />
      },
      {
        path: '/discover/playlist',
        element: <PlayList />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artlist',
        element: <ArtList />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
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
