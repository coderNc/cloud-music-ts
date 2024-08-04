import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getHotRecommend, getTopBanners } from '@/service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'recommend',
  async (arg, { dispatch, getState }) => {
    const bannerRes = await getTopBanners()
    const hotRecommendRes = await getHotRecommend()
    dispatch(changeBannersAction(bannerRes.banners))
    dispatch(changeHotRecommendAction(hotRecommendRes.result))
  }
)

interface RecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
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
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
