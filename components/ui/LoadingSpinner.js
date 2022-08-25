import React from "react";
// CSS Styles
import CSS from './LoadingSpinner.module.scss';

function LoadingSpinner(){
   return(
    <div className={CSS.spinnerOverlay}>
        <div className={CSS.spinner}></div>
    </div>
);}

export default LoadingSpinner;