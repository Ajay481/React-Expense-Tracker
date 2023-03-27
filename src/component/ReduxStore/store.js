import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import ExpenseReducer from "./ExpenseSlice";
import ThemeReducer from "./themeSlice";

export const store = configureStore({
  reducer: { expense: ExpenseReducer, auth: AuthReducer, theme: ThemeReducer },
});
