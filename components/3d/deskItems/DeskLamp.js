// Imports
import { useState } from 'react';

import * as THREE from 'three';

function DeskLamp(props){
    const [active, setActive] = useState(false)
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshStandardMaterial({color: active ? 0xff0bb0: 0xff0000, visible: false}),
    );
    const pointLight = new THREE.PointLight(0xff9000, 0, 40);
    box.position.set(5, 1, 4);
    pointLight.position.set(5, 1, 4);
    pointLight.intensity = active ? 1.2 : 0 ;
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.x = 2048;
    pointLight.shadow.mapSize.y = 2048;

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
    box.receiveShadow = true;
    box.castShadow = active;
    function handleClick(){
        if(props.onClick)
        {
            props.onClick();
        }
        setActive((prev) => !prev);
    }    
    return(
        <group>
            <primitive onClick={handleClick} object={box}>
            </primitive>
            <primitive  object={pointLight} />
            <primitive  object={pointLightHelper} />
        </group>

);}

export default DeskLamp;