import { UserType } from 'app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUserState {
  currentUser: UserType | null;
}

const initialState: CurrentUserState = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserType | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const currentUserReducer = currentUserSlice.reducer;
export const { setCurrentUser } = currentUserSlice.actions;
