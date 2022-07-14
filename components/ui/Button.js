// Imports

// CSS Styles
import CSS from "./Button.module.scss"
function Button(props){
    let classes = `${CSS.button}`;
    if(props.className){classes += ` ${props.className}`};
   return(
       <button className={classes}>
           {props.children}
       </button>

);}

export default Button;