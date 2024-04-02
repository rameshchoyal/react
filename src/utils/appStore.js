import { configureStore } from "@reduxjs/toolkit";
import reducers from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: reducers,
  },
});

export default appStore;
