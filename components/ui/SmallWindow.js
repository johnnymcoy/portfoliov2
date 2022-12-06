import { useState } from "react";
import Button from "../windowsUI/Button";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import CSS from "./SmallWindow.module.scss"
import Textbox from "./Textbox";

//props to pass down
// bCanBeMaximized


function SmallWindow(props){
    const bCanBeMaximized = props.bCanBeMaximized;
    const [bMaximized, setbMaximized ] = useState(false);
    const [bClosed, setbClosed ] = useState(false);
    
    function StatusButtons(){
        let MaximizeButton = 
        (<>
            {!bMaximized && <Button  className={`${CSS.button} ${CSS.maximize}`} onClick={maximizeHandler}></Button>}
            {bMaximized && <Button className={`${CSS.button} ${CSS.restore}`} onClick={minimizeHandler}></Button>}
        </>)
        if(bCanBeMaximized)
        {
            MaximizeButton = <></>
        }
        return(
            <div className={CSS.titleBarControls}>
                <Button className={`${CSS.button} ${CSS.minimize}`}></Button>
                {MaximizeButton}
                <Button className={`${CSS.button} ${CSS.close}`} onClick={closeHandler}></Button>
            </div>
        );
    }

    if(bCanBeMaximized)
    {

    }
    function maximizeHandler(){
        setbMaximized(true);
    }
    function minimizeHandler(){
        setbMaximized(false);
    }
    function closeHandler(){
        setbClosed(true);
    }
    let windowClasses = bMaximized ? `${CSS.window} ${CSS.maximized}` : `${CSS.window}`
    if(props.className){windowClasses += ` ${props.className}`}  
    if(bClosed){ windowClasses += ` ${CSS.closed}` }
   return(
       <div className={windowClasses}>
            <div className={CSS.titleBar}>
                <div className={CSS.titleBarText}>{props.title}</div>
                <StatusButtons />
            </div>
            <div className={CSS.windowBody}>
            {/* <p>Hello World</p>
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
            <Dropdown /> */}
            {props.children}
            <section className={CSS.fieldRow}>
                <Button size="small">OK</Button>
                <Button size="small" className={CSS.cancelButton}>Cancel</Button>

            </section>
           </div>
       </div>

);}

export default SmallWindow;