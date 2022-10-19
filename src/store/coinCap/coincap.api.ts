import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICoin } from './../../models/models';
import { COINCAP_API } from './../../constants/externalLinks';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async () => {
    try {
      const response = await axios.get<ICoin>(COINCAP_API)
      return response.data
    } catch (e) {
      let message = 'Error'
      if (e instanceof Error) {
        message = e.message
      }
      return message
    }
  }
)