import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ActiveCategoryReducer from "./ActiveCategoryReducer";
import ProductReducer from "./ProductReducer";
import ActiveMenuReducer from "./ActiveMenuReducer";
import UpdateTimeReducer from "./UpdateTimeReducer";
import DarkModeReducer from "./DarkModeReducer";

export default configureStore({
  reducer: {
    cart: CartReducer,
    activeCategory: ActiveCategoryReducer,
    product: ProductReducer,
    activeMenu: ActiveMenuReducer,
    realTime: UpdateTimeReducer,
    theme: DarkModeReducer,
  },
});
