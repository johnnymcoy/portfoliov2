// Imports
import { useState } from "react";

// CSS Styles
import CSS from "./Desktop.module.scss";
import DesktopShortcut from "./DesktopShortcut";

const shortcuts = [
    {
        id: 1,
        name: "My Computer",
        icon: "img",
    },
    {
        id: 2,
        name: "Calculator",
        icon: "img",
    },    
    {
        id: 3,
        name: "To do list",
        icon: "img",
    },
    {
        id: 4,
        name: "I.M. Chat",
        icon: "img",
    },

]

function Desktop(){
    const [selected, setSelected] = useState();
    function clickHandler(){
        // console.log("Click desktop");
        setSelected();
    }
    function shortcutClicked(id){
        setSelected(id);
    }


   return(
       <div className={CSS.desktop}>
            {/* <div className={CSS.icons}> */}
            <div className={CSS.bg} onClick={clickHandler}></div>
                {shortcuts.map((item) => 
                    <DesktopShortcut onClick={shortcutClicked}
                        id={item.id} key={item.id}
                        name={item.name}
                        icon={item.icon}
                        selected={selected}
                    />
                )}
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