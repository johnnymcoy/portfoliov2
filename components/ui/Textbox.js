import CSS from './Textbox.module.scss';

function Textbox(props){
    let inputType = (<input id="textbox" className={CSS.input} ref={props.ref} type={props.type}/>);
    if(props.textArea)
    {
        inputType = <textarea id="textbox" rows={props.rows} cols={props.cols} className={CSS.input}> </textarea>
    }
   return(
       <div className={CSS.wrapper}>
           <label htmlFor="textbox" className={CSS.label}>{props.title}</label>
           {inputType}
       </div>

);}

export default Textbox;