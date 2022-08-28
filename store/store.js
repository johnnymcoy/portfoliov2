import { configureStore } from "@reduxjs/toolkit"
import menuReducer from "./mainStore";
// import authReducer from "./auth";
// import themeReducer from "./themeStore"
import notesReducer from "./apps/NoteStore";
import todoReducer from "./apps/TodoStore";

const store = configureStore({
    reducer: {menu: menuReducer, notes: notesReducer, todo: todoReducer}
});

export default store;