import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import filtersReducer from "./filtersSlice";
import favoritesSlice from "./favoritesSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice);

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: persistedFavoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
