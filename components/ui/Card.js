// Imports

import CSS from "./Card.module.scss";

function Card({children}){

   return(
    <div className={CSS.card}>
        {children}
    </div>

);}

export default Card;