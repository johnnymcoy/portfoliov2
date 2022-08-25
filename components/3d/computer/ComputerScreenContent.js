// Imports
import Calculator from "components/apps/Calculator";
import { useState } from "react";
import Desktop from "../../ui/Desktop";
import SmallWindow from "../../ui/SmallWindow";
import Taskbar from "../../ui/Taskbar";
// CSS Styles
import CSS from './ComputerScreenContent.module.scss';

function ComputerScreenContent(){
    const [computerOn, setComputerOn] = useState(false);
    const wrapperClasses = computerOn ? `${CSS.wrapper} ${CSS.off}` : `${CSS.wrapper}`;
    //todo: temp 
    function clickHandler(){
        // setComputerOn(prevState => !prevState);
    }
   return(
<div className={wrapperClasses} onClick={clickHandler}>
    {/* <div className={CSS.overlay}></div> */}
    <Desktop>
        <Calculator />
        {/* <SmallWindow>
            Hello
        </SmallWindow> */}
    </Desktop>
    <Taskbar />
</div>

);}

export default ComputerScreenContent;