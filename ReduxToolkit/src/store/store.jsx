import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const prsistedCounter = persistReducer(persistConfig, CounterSlice);

export const store = configureStore({
  reducer: {
    counter: prsistedCounter,
  },
});

export const persisted = persistStore(store);
