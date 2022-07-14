// Imports

// CSS Styles
import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import CSS from "./SmallWindow.module.scss"
import Textbox from "./Textbox";
function SmallWindow(){
    const [bMaximized, setbMaximized ] = useState(false);
    function maximizeHandler(){
        setbMaximized(true);
    }
    function minimizeHandler(){
        setbMaximized(false);
    }
    const windowClasses = bMaximized ? `${CSS.window} ${CSS.maximized}` : `${CSS.window}`
   return(
       <div className={windowClasses}>
           <div className={CSS.titleBar}>
            <div className={CSS.titleBarText}>Program </div>
            <div className={CSS.titleBarControls}>
                <Button className={`${CSS.button} ${CSS.minimize}`}></Button>
                {!bMaximized && <Button className={`${CSS.button} ${CSS.maximize}`} onClick={maximizeHandler}></Button>}
                {bMaximized && <Button className={`${CSS.button} ${CSS.restore}`} onClick={minimizeHandler}></Button>}
                <Button className={`${CSS.button} ${CSS.close}`}></Button>
            </div>
           </div>
           <div className={CSS.windowBody}>
            <p>Hello World</p>
            <Checkbox />
            <br />
            <Textbox/>
            <br />
            <Slider vertical />
            <br />
            <br />
            <br />
            <br />

            <Slider  />
            <br />
            <Dropdown />

            <section className={CSS.fieldRow}>
                <Button>OK</Button>
                <Button className={CSS.cancelButton}>Cancel</Button>

            </section>
           </div>
       </div>

);}

export default SmallWindow;