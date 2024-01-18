import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    searchName: "",
    LoginToPage: "",
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length) {
        state.messages.splice(LIVE_CHAT_COUNT, 3);
      }
      state.messages.unshift(action.payload);
    },

    addName: (state, action) => {
      state.searchName = action.payload;
    },
    addLoginName: (state, action) => {
      state.LoginToPage = action.payload;
    },
  },
});

export const { addMessage, addName,addLoginName } = chatSlice.actions;
export default chatSlice.reducer;
