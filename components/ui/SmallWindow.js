import { useState } from "react";
import Button from "../windowsUI/Button";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import Textbox from "./Textbox";
import CSS from "./SmallWindow.module.scss"

//props to pass down
// bCanBeMaximized


function SmallWindow(props){
    const bCanBeMaximized = props.bCanBeMaximized;
    const [bMaximized, setbMaximized ] = useState(false);
    const [bMinimized, setbMinimized ] = useState(false);
    const [bClosed, setbClosed ] = useState(false);
    
    // function StatusButtons(){
    //     let MaximizeButton = 
    //     (<>
    //         {!bMaximized && <Button  className={`${CSS.button} ${CSS.maximize}`} onClick={maximizeHandler}></Button>}
    //         {bMaximized && <Button className={`${CSS.button} ${CSS.restore}`} onClick={minimizeHandler}></Button>}
    //     </>)
    //     if(bCanBeMaximized)
    //     {
    //         MaximizeButton = <></>
    //     }
    //     return(
    //         <div className={CSS.titleBarControls}>
    //             <Button className={`${CSS.button} ${CSS.minimize}`}></Button>
    //             {MaximizeButton}
    //             <Button className={`${CSS.button} ${CSS.close}`} onClick={closeHandler}></Button>
    //         </div>
    //     );
    // }

    let windowClasses = bMaximized ? `${CSS.window} ${CSS.maximized}` : `${CSS.window}`
    if(props.className){windowClasses += ` ${props.className}`}  
    if(bClosed){ windowClasses += ` ${CSS.closed}` }
    if(bMinimized){ windowClasses += ` ${CSS.minimized}`}

   return(
    <div className={windowClasses}>
        <div className={CSS.titleBar}>
            <div className={CSS.titleBarText}>{props.title}</div>
            <div className={CSS.titleBarControls}>
                <Button className={`${CSS.button} ${CSS.minimize}`} onClick={() => setbMinimized(true)}></Button>
                {!bMaximized && <Button  className={`${CSS.button} ${CSS.maximize}`} onClick={() => setbMaximized(true)}></Button>}
                {bMaximized && <Button className={`${CSS.button} ${CSS.restore}`} onClick={() => setbMaximized(false)}></Button>}
                <Button className={`${CSS.button} ${CSS.close}`} onClick={() => setbClosed(true)} ></Button>
            </div>
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
            Lorem ISpum             Lorem ISpum 
            Lorem ISpum 
            Lorem ISpum 
            Lorem ISpum 
            Lorem ISpum 
            Lorem ISpum 

            <section className={CSS.fieldRow}>
                <Button size="small">OK</Button>
                <Button size="small" className={CSS.cancelButton}>Cancel</Button>
            </section>
        </div>
    </div>

);}

export default SmallWindow;