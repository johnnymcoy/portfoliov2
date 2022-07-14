// Imports

// CSS Styles
import CSS from './Checkbox.module.scss';

function Checkbox(){
   return(
       <div>
           <input id="input" type="checkbox" className={CSS.input} />
           <label for="input"className={CSS.label} >
            This is a checkbox
           </label>
       </div>

);}

export default Checkbox;