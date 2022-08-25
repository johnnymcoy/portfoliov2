import LoadingSpinner from "components/ui/LoadingSpinner";
import CSS from "./Button.module.scss"

function Button({loading, children, status, size, className, ...props}){
    let classes = `${CSS.button}`;
    if(className){classes += ` ${className}`};
    if(loading){classes += ` ${CSS.loading}`};
    switch(status)
    {
        case "primary":
            classes += ` ${CSS.primary}`
            break;
        case "warning":
            classes += ` ${CSS.warning}`
            break;
        case "success":
            classes += ` ${CSS.success}`
            break;
        case "failed":
            classes += ` ${CSS.failed}`
            break;
        default: case "default":
            classes += ` ${CSS.default}`
    }
    switch(size)
    {
        case "small":
            classes += ` ${CSS.small}`
            break;
        case "regular": default:
            classes += ` ${CSS.regular}`
            break;
        case "large":
            classes += ` ${CSS.large}`
            break;
        case "extraLarge":
            classes += ` ${CSS.extraLarge}`
            break;
    }
    function clickHandler(){
        if(props.onClick){props.onClick();}
    }
    return(
<button className={classes} onClick={clickHandler} {...props}>
    {loading && <LoadingSpinner />}
    <span className={CSS.text}>{children}</span>
</button>

);}

export default Button;