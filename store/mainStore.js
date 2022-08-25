import {createSlice} from "@reduxjs/toolkit"

const initialMenuState = {
    bIsMenuOpen: false,
    //Get from Web
    bIsDarkMode: false,
    bSocialsVisible: false,
    bThemeChangeVisible: false,
};




const menuSlice = createSlice({
    name: "menu",
    initialState: initialMenuState,
    reducers: {
        openMenu(state){
            state.bIsMenuOpen = true;
        },
        closeMenu(state){
            state.bIsMenuOpen = false;
        },
        setDarkMode(state){
            state.bIsDarkMode = true;
        },
        setLightMode(state){
            state.bIsDarkMode = false;
        },
        toggleShowSocials(state){
            state.bSocialsVisible = !state.bSocialsVisible;
        },
        toggleShowThemeChanger(state){
            state.bThemeChangeVisible = !state.bThemeChangeVisible;
        },
        
    },

});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;