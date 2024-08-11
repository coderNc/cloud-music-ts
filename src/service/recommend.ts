import {
  BannersRes,
  HotRecommendRes,
  NewAlbumRes,
  PersonalRecommendRes
} from '@/utils/types/recommend'
import request from './service'

export const getTopBanners = () => {
  return request.get<BannersRes>('/banner')
}

export function getHotRecommend() {
  return request.get<HotRecommendRes>('/personalized')
}

export function getPersonalRecommend() {
  return request.get<PersonalRecommendRes>('/recommend/resource')
}

export function getNewAlbum(offset = 0, limit = 10) {
  return request.get<NewAlbumRes>('/album/new', {
    params: {
      offset,
      limit
    }
  })
}

export function getPlayListDetail(id: number) {
  return request.get('/playlist/detail', { params: { id } })
}

export function getArtistList(cat: number, limit: number) {
  return request.get('/artist/list', {
    params: {
      cat,
      limit
    }
  })
}
