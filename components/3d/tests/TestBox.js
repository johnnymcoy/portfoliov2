// Imports
import { useState } from 'react';

import * as THREE from 'three';
// CSS Styles

function TestBox(props){
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [boxScale, setBoxScale] = useState([1,1,1]);
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshStandardMaterial({color: active ? 0xff0bb0: 0xff0000}),
    );
    box.receiveShadow = true;
    box.castShadow = active;

    function handleClick(){
        if(props.onClick)
        {
            props.onClick();
        }
        setActive((prev) => !prev);
    }
    console.log("Custom Box Render")
    return(
        <primitive onClick={handleClick} object={box}>
        </primitive>

);}

export default TestBox;