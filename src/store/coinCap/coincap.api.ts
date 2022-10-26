import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICoin } from "./../../models/models";
import { COINCAP_API } from "./../../constants/externalLinks";

type incomingParams = {
  limit: string,
  offset: string
}

export const fetchCoins = createAsyncThunk(
  "coins/fetchCoins",
  async ({ limit, offset }: incomingParams) => {
    try {
      const response = await axios.get<ICoin>(
        `${COINCAP_API}?limit=${limit}&offset=${offset}`
      );
      return response.data;
    } catch (e) {
      let message = "Error";
      if (e instanceof Error) {
        message = e.message;
      }
      return message;
    }
  }
);
