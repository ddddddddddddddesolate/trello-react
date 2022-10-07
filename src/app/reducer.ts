import { combineReducers } from '@reduxjs/toolkit';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { currentUserReducer } from 'app/slices/currentUser';
import { usersReducer } from 'app/slices/users';
import { columnsReducer } from 'app/slices/columns';
import { cardsReducer } from 'app/slices/cards';
import { commentsReducer } from 'app/slices/comments';

const reducer = combineReducers({
  currentUserReducer,
  usersReducer,
  columnsReducer,
  cardsReducer,
  commentsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const persistedReducer = persistReducer(persistConfig, reducer);
