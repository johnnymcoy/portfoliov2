import CSS from './Slider.module.scss';


function Slider(props){
    if(props.vertical)
    {
        return(
            <div className={CSS.wrapper}>
                <label className={CSS.label}>Volume</label>
                <div className={CSS.vertical}>
                    <label className={CSS.min} htmlFor="inputRange">Low</label>
                    <input className={`${CSS.input} ${"boxIndicator"}`} id="inputRange" type="range" min="1" max="12"/>
                    <label className={CSS.max}>High</label>
                </div>
            </div>
        )        
    }

   return(
    <div className={CSS.wrapper}>
        <label className={CSS.label}>Volume</label>
        <label className={CSS.min} htmlFor="inputRange">Low</label>
        <input className={CSS.input} id="inputRange" type="range" min="1" max="12" />
        <label className={CSS.max}>High</label>
    </div>

);}

export default Slider;