import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHotRecommend,
  getNewAlbum,
  getPersonalRecommend,
  getTopBanners
} from '@/service/recommend'
import {
  Albums,
  Banner,
  HotRecommend,
  PersonalRecommend
} from '@/utils/types/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'recommend',
  async (arg, { dispatch, getState }) => {
    const bannerRes = await getTopBanners()
    const hotRecommendRes = await getHotRecommend()
    const personalRecommendRes = await getPersonalRecommend()
    const newAlbumRes = await getNewAlbum()
    dispatch(changeBannersAction(bannerRes.banners))
    dispatch(changeHotRecommendAction(hotRecommendRes.result))
    dispatch(changePersonalRecommendAction(personalRecommendRes.recommend))
    dispatch(changeNewAlbumsAction(newAlbumRes.albums))
  }
)

interface RecommendState {
  banners: Banner[]
  hotRecommends: HotRecommend[]
  personalRecommends: PersonalRecommend[]
  newAlbums: Albums[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  personalRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<Banner[]>) {
      state.banners = payload
    },
    changeHotRecommendAction(
      state,
      { payload }: PayloadAction<HotRecommend[]>
    ) {
      state.hotRecommends = payload
    },
    changePersonalRecommendAction(
      state,
      { payload }: PayloadAction<PersonalRecommend[]>
    ) {
      state.personalRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }: PayloadAction<Albums[]>) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changePersonalRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
