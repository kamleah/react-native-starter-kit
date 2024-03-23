import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLoading: false }

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loading(state, action) {
      state.isLoading = action.payload
    }
  },
})

export const { loading } = loaderSlice.actions
export default loaderSlice.reducer