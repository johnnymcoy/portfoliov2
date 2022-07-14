// Imports

// CSS Styles
import CSS from "./Button.module.scss"
function Button(props){
    let classes = `${CSS.button}`;
    if(props.className){classes += ` ${props.className}`};
    function clickHandler(){
        props.onClick();
    }
    return(
       <button className={classes} onClick={clickHandler}>
           {props.children}
       </button>

);}

export default Button;