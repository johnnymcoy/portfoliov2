import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Desktop from "../components/ui/Desktop";
import SmallWindow from "../components/ui/SmallWindow";
import Taskbar from "../components/ui/Taskbar";
import Window from "../components/ui/Window";
import CSS from "./index.module.scss";


import { Canvas, useFrame, useLoader, createRoot, useThree} from "@react-three/fiber"
import { BoxBufferGeometry } from "three";
import TestBox from "../components/3d/tests/testBox";
import { OrbitControls, useTexture, Html, Box, Effects } from '@react-three/drei'

function HtmlBox() {
    //For keeping the scale relative
    // const { viewport } = useThree()

    //HTML code inside of a 3D object
    const [size, set] = useState(0.5)
    const [hidden, setVisible] = useState(false)
    const [loading, setIsLoading] = useState(false)

    function buttonHandler(){
        setIsLoading(prev => !prev)
    }
    return (
      <mesh scale={1} position={[-10,0,0]}
        //keep the mesh Relative size to the viewport
        //   scale={(viewport.width / 10) * size}
        >
        <boxGeometry args={[0,0]} />
        <meshStandardMaterial />
        <Html
          style={{
            transition: 'all 0.2s',
            height:"100%",
            width: "100%",
            textAlign: "center",
            alignItems: "center",
            opacity: hidden ? 0 : 1,
            transform: `scale(${hidden ? 0.5 : 1})`
          }}
          center
          position={[0, 0, 0]}
          transform
        //   occlude
        //   onOcclude={setVisible}
        >
    <div className={CSS.body}>

        <Desktop>
            <SmallWindow>
                Hello
            </SmallWindow>

        </Desktop>
        <Taskbar />
    </div>
        </Html>
      </mesh>
    )
}


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
        <Canvas className={CSS.canvas}
            camera={{fov: 55, position: [0,0,25]}}
        >
    {/* <div className={CSS.body}> */}
            {/* <Window>
                {outputText}
            </Window> */}
                <OrbitControls />
                <TestBox />
                <HtmlBox>

                </HtmlBox>
        {/* <Desktop>
            <SmallWindow>
            Hello
            </SmallWindow>
            
        </Desktop> */}
        {/* Hello it's me CURTY!! */}
        {/* <Card>
            {outputText}
        </Card> */}
        {/* <Card>
            <p>Hello i'm walking</p>
            Theme {theme ? "light" : "dark"} <br />
            
        </Card> */}
        {/* <div className={CSS.block}></div>
        <button onClick={themeHandler}>Light/Dark Theme</button> */}
        {/* <Button>Delete</Button> */}
        {/* <Taskbar /> */}
    {/* </div> */}
        </Canvas>
);}

export default index;