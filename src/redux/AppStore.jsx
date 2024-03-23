import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
import authSlice from './authSlice/authSlice';
import loaderSlice from './slice/loaderSlice';
import userSlice from './userSlice/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  counter: counterSlice,
  loader: loaderSlice,
  auth: authSlice,
  user: userSlice,
});

const persistConfig = {
  key: 'SiVerce',
  version: 1,
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const AppStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(AppStore);
export default AppStore;
