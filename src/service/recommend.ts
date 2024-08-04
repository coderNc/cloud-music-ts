import request from './service'

export const getTopBanners = () => {
  return request.get<any>('/banner')
}

export function getHotRecommend() {
  return request.get('/personalized')
}

export function getNewAlbum(offset = 0, limit = 10) {
  return request.get('/album/new', {
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
