// Imports

// CSS Styles
import Button from "../windowsUI/Button";
import CSS from "./Taskbar.module.scss"

function Taskbar(){
    let options = {
        
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        weekday: "short",
        // year: "numeric",
        // month: "2-digit",
        // day: "numeric",
    };

    const time = new Date().getTime();
    const formatedTime = new Intl.DateTimeFormat('en-AU',options).format(time);
   return(
    
<footer className={CSS.footer}>
    <Button size="small" className={CSS.startButton}>
        <div className={CSS.startImg}></div>
        Start
    </Button>
    <div className={CSS.divider}></div>
    <div className={CSS.tasks}></div>
    <div className={CSS.divider}></div>
    <div className={CSS.tray}>
        <div className={CSS.trayIcons}></div>
        <div className={CSS.trayClock}>{formatedTime}</div>
    </div>
</footer>

);}

export default Taskbar;