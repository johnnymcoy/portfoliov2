// Imports

// CSS Styles
import CSS from './Textbox.module.scss';

function Textbox(props){
    let inputType = (<input id="textbox" className={CSS.input} type="text"/>);
    if(props.textArea)
    {
        inputType = <textarea id="textbox" rows="8" cols="5" className={CSS.input}> </textarea>
    }
   return(
       <div className={CSS.wrapper}>
           <label for="textbox" className={CSS.label}>Text</label>
           {inputType}
       </div>

);}

export default Textbox;