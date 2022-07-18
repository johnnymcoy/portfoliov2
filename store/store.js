import { configureStore } from "@reduxjs/toolkit"
import menuReducer from "./mainStore";
// import authReducer from "./auth";
// import themeReducer from "./themeStore"

const store = configureStore({
    reducer: {menu: menuReducer}
});

export default store;