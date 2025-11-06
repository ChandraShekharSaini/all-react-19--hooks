import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "counter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, CounterSlice);

const store = configureStore({
  reducer: {
    counter: persistedReducer, 

  },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

const persistor = persistStore(store);

export { store, persistor };
