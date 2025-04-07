import { combineReducers, configureStore } from "@reduxjs/toolkit";
import OrderSlice from "../store/OrderSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const orderConfig = {
  key: "order",
  storage: storage,
};

const RootReducer = combineReducers({
  order: persistReducer(orderConfig, OrderSlice), // slice nomini 'order' deb o'zgartirdik
});

export const store = configureStore({
  reducer: RootReducer,
});
export const persistor = persistStore(store);
