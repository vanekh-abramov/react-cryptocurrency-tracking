import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoin } from './../../models/models';
import { fetchCoins } from './coincap.api';


interface coinsState {
  coins: ICoin[],
  status: boolean,
  error: string
}

const initialState: coinsState = {
  coins: [],
  status: false,
  error: ''
}

export const CoincapSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoins.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchCoins.fulfilled.type]: (state, action: PayloadAction<ICoin[]>) => {
      state.status = false
      state.coins = action.payload
      state.error = ''
    },
    [fetchCoins.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default CoincapSlice.reducer