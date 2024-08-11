import { getAccount, getPlCount, getUserDetail } from '@/service/user'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserInfoAction = createAsyncThunk(
  'user/fetchUserInfo',
  async (arg, { dispatch, getState }) => {
    const res = await getAccount()
    const plRes = await getPlCount()
    const detailRes = await getUserDetail(res.profile.userId)
    dispatch(changeAccountAction(res))
    dispatch(changeUserDetailAction(detailRes))
    console.log('state', getState())
  }
)

interface Account {
  id: number
  userName: string
  type: number
  status: number
  whitelistAuthority: number
  createTime: number
  tokenVersion: number
  ban: number
  baoyueVersion: number
  donateVersion: number
  vipType: number
  anonimousUser: boolean
  paidFee: boolean
}

interface Profile {
  userId: number
  userType: number
  nickname: string
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  signature: string
  createTime: number
  userName: string
  accountType: number
  shortUserName: string
  birthday: number
  authority: number
  gender: number
  accountStatus: number
  province: number
  city: number
  authStatus: number
  description: null
  detailDescription: null
  defaultAvatar: boolean
  expertTags: null
  experts: null
  djStatus: number
  locationStatus: number
  vipType: number
  followed: boolean
  mutual: boolean
  authenticated: boolean
  lastLoginTime: number
  lastLoginIP: string
  remarkName: null
  viptypeVersion: number
  authenticationTypes: number
  avatarDetail: null
  anchor: boolean
}
interface IState {
  detail: object
  account: Partial<Account>
  profile: Partial<Profile>
}

const initialState: IState = {
  detail: {},
  account: {},
  profile: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAccountAction(state, { payload }: PayloadAction<IState>) {
      state.account = payload.account
      state.profile = payload.profile
    },
    changeUserDetailAction(state, { payload }: PayloadAction<object>) {
      state.detail = payload
    }
  }
})

export const { changeAccountAction, changeUserDetailAction } = userSlice.actions
export default userSlice.reducer
