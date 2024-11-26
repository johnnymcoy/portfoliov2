import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three'


function FloppyDisk(props){
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.2;
    material.metalness = 0.7;

    const [textTexture]= useTexture(["static/3d/textures/matcaps/7.png"]);
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: textTexture});
    const meshRef = useRef();

    const {nodes, materials} = useGLTF("/static/3d/AppleComputerFloppyDisk.gltf");
return(
<group 
    position={props.position? props.position : [ 2.5, 1, 0]} 
    scale={props.scale ? props.scale : [1,1,1]}  
    rotation={props.rotation ? props.rotation : [0,0,0]} 
    ref={meshRef} >
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.FloppyDisk001.geometry}
        material={material}
        scale={[0.025, 0.025, 0.025]}
        rotation={[Math.PI * 0.5, 0, 0]}
        />
    {/*
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube036_1.geometry}
    //   material={materials["Chocofur_Glossy_Basic.003"]}
    material={material}

    />
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube036_2.geometry}
    //   material={materials["Buttons.001"]}
    material={material}

    />
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube036_3.geometry}
    //   material={materials["MainPC.005"]}
    material={material}

    /> */}
</group>
)};
      
export default FloppyDisk;


