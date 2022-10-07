import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from 'app/reducer';

import { persistStore } from 'redux-persist';

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof store.getState>;
