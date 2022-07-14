import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Desktop from "../components/ui/Desktop";
import SmallWindow from "../components/ui/SmallWindow";
import Taskbar from "../components/ui/Taskbar";
import Window from "../components/ui/Window";
import CSS from "./index.module.scss";



function index(){
    const [theme, setTheme] = useState(false);
    const [outputText, setOutputText] = useState("");

    function themeHandler(){
        setTheme((prevState) =>
        prevState = !prevState
        );
    }
    useEffect(() => {
        typeWriter();
    }, [])
    let i = 0
    let text  = "Heello, I'm Curtis how are you?"
    let speed = 50;
    function typeWriter(){
        let timeoutHanler;
        if(i < text.length){
            timeoutHanler = setTimeout(typeWriter, speed);
            setOutputText(prevState => prevState += text.charAt(i));
            i++;
            console.log("text", i, text.charAt(i));
        }
        else
        {
            clearTimeout(timeoutHanler);
        }
    }

   return(
    <div className={CSS.body}>
        <Desktop>
        </Desktop>
        {/* Hello it's me CURTY!! */}
        {/* <Card>
            {outputText}
        </Card> */}
        {/* <Window>
            {outputText}
        </Window> */}
        {/* <SmallWindow>

        </SmallWindow> */}
        {/* <Card>
            <p>Hello i'm walking</p>
            Theme {theme ? "light" : "dark"} <br />

        </Card> */}
        {/* <div className={CSS.block}></div>
        <button onClick={themeHandler}>Light/Dark Theme</button> */}
        {/* <Button>Delete</Button> */}
        <Taskbar />
    </div>
);}

export default index;