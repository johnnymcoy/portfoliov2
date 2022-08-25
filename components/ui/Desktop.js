// Imports
import { useState } from "react";

// CSS Styles
import CSS from "./Desktop.module.scss";
import DesktopShortcut from "./DesktopShortcut";

const shortcuts = [
    {
        id: 1,
        name: "My Computer",
        icon: "/static/images/icons/my-computer-32x32.png",
    },
    {
        id: 2,
        name: "Calculator",
        icon: "/static/images/icons/notepad-32x32.png",
    },    
    {
        id: 3,
        name: "To Do List",
        icon: "/static/images/icons/notepad-32x32.png",
    },
    {
        id: 4,
        name: "I.M. Chat",
        icon: "/static/images/icons/notepad-32x32.png",
    },
    {
        id: 5,
        name: "Notes",
        icon: "/static/images/icons/notepad-32x32.png",
    },
    {
        id: 6,
        name: "Countdown Timer",
        icon: "/static/images/icons/notepad-32x32.png",
    },
    {
        id: 7,
        name: "Deso Cat GAME",
        icon: "/static/images/icons/notepad-32x32.png",
    },
    {
        id: 8,
        name: "Co-op Shooter",
        icon: "/static/images/icons/notepad-32x32.png",
    },



]

function Desktop(props){
    const [selected, setSelected] = useState();
    function clickHandler(){
        console.log("click")
        setSelected();
    }
    function shortcutClicked(id){
        setSelected(id);
    }


   return(
       <div className={CSS.desktop}>
            {/* <div className={CSS.icons}> */}
            <div className={CSS.overlay}>
                {props.children}
            </div>
            <div className={CSS.bg} onClick={clickHandler}></div>
            <div className={CSS.shortcuts} >
                {shortcuts.map((item) => 
                    <DesktopShortcut onClick={shortcutClicked}
                        id={item.id} key={item.id}
                        name={item.name}
                        icon={item.icon}
                        selected={selected}
                    />
                )}
            </div>
                {/* <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/>
                <DesktopShortcut onClick={shortcutClicked}/> */}

            {/* </div> */}
       </div>
);}

export default Desktop;