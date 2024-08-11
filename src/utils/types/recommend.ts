export interface HotRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface HotRecommendRes {
  code: number
  result: HotRecommend[]
}

export interface Banner {
  imageUrl: string
  targetId: number
  adid: null
  targetType: number
  titleColor: string
  typeTitle: string
  url: null
  exclusive: boolean
  monitorImpress: null
  monitorClick: null
  monitorType: null
  monitorImpressList: null
  monitorClickList: null
  monitorBlackList: null
  extMonitor: null
  extMonitorInfo: null
  adSource: null
  adLocation: null
  adDispatchJson: null
  encodeId: string
  program: null
  event: null
  video: null
  song: null
  scm: string
  bannerBizType: string
}

export interface BannersRes {
  banners: Banner[]
  code: number
}
export interface PersonalRecommendRes {
  recommend: PersonalRecommend[]
  code: number
}

export interface PersonalRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  playcount: number
  createTime: number
  creator: Creator
  trackCount: number
  userId: number
  alg: string
}

export interface Creator {
  accountStatus: number
  vipType: number
  province: number
  avatarUrl: string
  authStatus: number
  userType: number
  nickname: string
  gender: number
  birthday: number
  city: number
  backgroundUrl: string
  remarkName: null
  avatarImgId: number
  backgroundImgId: number
  detailDescription: string
  defaultAvatar: boolean
  expertTags: null
  djStatus: number
  followed: boolean
  mutual: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
  description: string
  userId: number
  signature: string
  authority: number
}
