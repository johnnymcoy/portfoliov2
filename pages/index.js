import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Button from "../components/windowsUI/Button";
import Card from "../components/ui/Card";
import Desktop from "../components/ui/Desktop";
import SmallWindow from "../components/ui/SmallWindow";
import Taskbar from "../components/ui/Taskbar";
import Window from "../components/ui/Window";
import CSS from "../styles/index.module.scss";

import * as THREE from 'three'


import { Canvas, useFrame, useLoader, createRoot, useThree} from "@react-three/fiber"
import { OrbitControls, useTexture, Html, Box, Effects,  } from '@react-three/drei'
import ComputerMonitor3d from "../components/3d/tests/ComputerMonitor3d";
import TestBox from "../components/3d/tests/testBox";
import DeskLamp from "../components/3d/deskItems/DeskLamp";

import MainNavigation from "../components/layout/MainNavigation";
import {useSelector} from "react-redux";
import Textbox from "components/ui/Textbox";
import ComputerScreenContent from "components/3d/computer/ComputerScreenContent";




function index(){
    const bIsMenuOpen = useSelector(state => state.menu.bIsMenuOpen);
    // const AppCSS = bIsDarkTheme ? "App AppDark": "App" ;
    const bgBlurClass = bIsMenuOpen ? "wrapperBlur" : "wrapper";

    const [theme, setTheme] = useState(false);
    const [outputText, setOutputText] = useState("");

    function themeHandler(){
        setTheme((prevState) =>
        prevState = !prevState
        );
    }
    // useEffect(() => {
    //     typeWriter();
    // }, [])
    // let i = 0
    // let text  = "Heello, I'm Curtis how are you?"
    // let speed = 50;
    // function typeWriter(){
    //     let timeoutHanler;
    //     if(i < text.length){
    //         timeoutHanler = setTimeout(typeWriter, speed);
    //         setOutputText(prevState => prevState += text.charAt(i));
    //         i++;
    //         console.log("text", i, text.charAt(i));
    //     }
    //     else
    //     {
    //         clearTimeout(timeoutHanler);
    //     }
    // }
    /**
     * Lights
     */
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.position.set(4,2,6)
    // directionalLight.position.set(-4, 2, 0);
    directionalLight.castShadow = true;
    //Shadowmap Res
    directionalLight.shadow.mapSize.x = 2048;
    directionalLight.shadow.mapSize.y = 2048;
    //Shadow map length + size // Smaller = quicker+better quality 
    // directionalLight.shadow.camera.top = 0;
    // directionalLight.shadow.camera.right = 2000;
    // directionalLight.shadow.camera.bottom = -2000;
    // directionalLight.shadow.camera.left = -2000;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 2000;
    const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);

   return(
    <div className={CSS.body}>
        <MainNavigation menuOpen={bIsMenuOpen} />
        <div className={bgBlurClass}></div>
        <ComputerScreenContent />

        {/* <Canvas className={CSS.canvas} shadows
            camera={{fov: 55, position: [0,0,4]}}>
                <OrbitControls />
                <Suspense fallback={null}>
                    <ComputerMonitor3d />
                    <DeskLamp />
                </Suspense>
                <primitive object={directionalLight} />
                <primitive object={ambientLight} />
                <primitive object={directionalLightHelper} />
        </Canvas> */}
    </div>
);}

export default index;