import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getHotRecommend, getTopBanners } from '@/service/recommend'
import { Banner, HotRecommend } from '@/utils/types/recommend'

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
  banners: Banner[]
  hotRecommends: HotRecommend[]
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
    changeBannersAction(state, { payload }: PayloadAction<Banner[]>) {
      state.banners = payload
    },
    changeHotRecommendAction(
      state,
      { payload }: PayloadAction<HotRecommend[]>
    ) {
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
