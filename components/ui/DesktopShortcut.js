// Imports

// CSS Styles
import { useEffect, useState } from "react";
import CSS from "./DesktopShortcut.module.scss";
import NextImage from 'next/image'

function DesktopShortcut(props){
    const [selected, setSelected] = useState(false);
    const bIsSelected = props.selected === props.id;
    const classes = bIsSelected ? `${CSS.shortcut} ${CSS.selected}` : `${CSS.shortcut}`;
    function clickHandler(){
        props.onClick(props.id);
        // setSelected(true);
        // console.log("Shortcut Clicked")
    }
    function doubleClickHandler(){
        console.log("DBL click");
    }


   return(
        <div className={classes} 
            onClick={clickHandler} 
            onDoubleClick={doubleClickHandler}
        >
            <div className={CSS.selectionOutline}></div>
            <div className={CSS.selectionEffect}></div>

            <div className={CSS.icon}>
                <img src={props.icon} width="32" height="32"/>
            </div>
            <h1 className={CSS.name}>{props.name}</h1>
       </div>

);}

export default DesktopShortcut;