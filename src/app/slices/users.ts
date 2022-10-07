import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'app/types';

interface UsersState {
  users: UserType[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, { payload: user }: PayloadAction<UserType>) {
      state.users = [...state.users, user];
    },
    resetUsers(state) {
      state.users = [];
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser } = usersSlice.actions;
