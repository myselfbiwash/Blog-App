import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    imgFileUrl: (state, action) => {
      state.currentUser.profilePicture = action.payload;
    }
    
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  imgFileUrl,
  
} = userSlice.actions;

export default userSlice.reducer;