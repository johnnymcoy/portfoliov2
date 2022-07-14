// Imports

// CSS Styles
import Button from "./Button";
import CSS from "./SmallWindow.module.scss"
function SmallWindow(){

   return(
       <div className={CSS.window}>
           <div className={CSS.titleBar}>
            <div className={CSS.titleBarText}>Program </div>
            <div className={CSS.titleBarControls}>
                <Button className={CSS.button}></Button>
                <Button className={CSS.button}></Button>
                <Button className={CSS.button}></Button>
            </div>
           </div>
           <div className={CSS.windowBody}>
            <p>Hello World</p>
            <section className={CSS.fieldRow}>
                <Button>OK</Button>
                <Button className={CSS.cancelButton}>Cancel</Button>

            </section>
           </div>
       </div>

);}

export default SmallWindow;