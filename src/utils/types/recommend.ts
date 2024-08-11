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

export interface NewAlbumRes {
  albums: Albums[]
  code: number
  total: number
}

export interface Artists {
  img1v1Id: number
  topicPerson: number
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  alias: string[]
  name: string
  id: number
  img1v1Id_str: string
}

export interface Albums {
  songs: string[]
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: null
  artists: Artists[]
  copyrightId: number
  picId: number
  artist: Artists
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType: string
  alias: string[]
  description: string
  tags: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}
