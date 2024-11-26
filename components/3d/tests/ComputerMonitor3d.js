// Imports
import React, { Suspense, useEffect,useMemo,useRef,useState } from 'react';
import * as THREE from 'three'

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame, useLoader } from '@react-three/fiber'
import {  useGLTF } from '@react-three/drei'
import Desktop from '../../ui/Desktop';
import SmallWindow from '../../ui/SmallWindow';
import Taskbar from '../../ui/Taskbar';
import { OrbitControls, useTexture, Html, Box, Effects } from '@react-three/drei'
// import TestBox from './testBox';
import ComputerScreen from '../computer/ComputerScreen';
import Stats from "stats-js"
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import FloppyDisk from '../computer/FloppyDisk';


const Monitor = React.forwardRef((props, ref) => {
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.2;
    material.metalness = 0.7;
    
    const [textTexture]= useTexture(["static/3d/textures/matcaps/2.png"]);
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: textTexture});
    // const meshRef = useRef();

    const stats = new Stats();
    stats.showPanel( 0 ); 
    document.body.appendChild( stats.dom );
    useFrame(() => {
        stats.update();
    })
    // stats.

    const {nodes, materials} = useGLTF("/static/3d/ComputerNoScreen.gltf");
    return(
    <group position={[0.02, 0.2, -0.75]} scale={[1.5, 1.29, 1.7]} rotation={[0,(Math.PI * -0.5),0]} ref={ref}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={material}
        //   material={materials["MainPC.002"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={material}

        //   material={materials["Back.002"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={material}

        //   material={materials["RedLight.002"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={material}

        //   material={materials["Chocofur_Glossy_Basic.011"]}
        />
        <mesh 
            castShadow
            receiveShadow
            geometry={nodes.Cube005_4.geometry}
            material={material}

        //   material={materials["Chocofur_Glossy_Basic.012"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_5.geometry}
            material={material}

        //   material={materials["Chocofur_Glossy_Basic.010"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_6.geometry}         
            material={material}
        //   material={materials["Chocofur_Glossy_Basic.008"]}
        />
    </group> 
)})

function Keyboard(){
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.2;
    material.metalness = 0.7;
    

    const [textTexture]= useTexture(["static/3d/textures/matcaps/2.png"]);
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: textTexture});
    const meshRef = useRef();

    const {nodes, materials} = useGLTF("/static/3d/AppleComputerKeyboard.gltf");

    return(
<group position={[1.25, -1.25, 2.25]} scale={[0.09, 0.09, 0.17]} rotation={[0, (Math.PI * -0.5), -0.22]}  ref={meshRef}  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046.geometry}
    //   material={materials["Material.015"]}
      material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_1.geometry}
    //   material={materials["Material.007"]}
        material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_2.geometry}
    //   material={materials["Material.008"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_3.geometry}
    //   material={materials["Material.009"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_4.geometry}
    //   material={materials["Material.010"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_5.geometry}
    //   material={materials["Material.011"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_6.geometry}
    //   material={materials["Material.012"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_7.geometry}
    //   material={materials["Material.013"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_8.geometry}
    //   material={materials["Material.014"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_9.geometry}
    //   material={materials["MainPC.006"]}
    material={material}

    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube046_10.geometry}
    //   material={materials["Chocofur_Glossy_Basic.002"]}
    material={material}

    />
  </group>
)};

function Mouse(){
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.2;
    material.metalness = 0.7;

    const [textTexture]= useTexture(["static/3d/textures/matcaps/2.png"]);
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: textTexture});
    const meshRef = useRef();

    const {nodes, materials} = useGLTF("/static/3d/AppleComputerMouse.gltf");
    return(
        <group
        position={[1.49, -1.77, -2.65]}
        rotation={[0, (Math.PI * -0.5), -Math.PI / 2]}
        scale={[0.63, 0.15, 0.63]}
        ref={meshRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
        //   material={materials["MainPC.001"]}
        material={material}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
        //   material={materials["MainPC.003"]}
        material={material}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
        //   material={materials["Material.006"]}
        material={material}

        />
      </group>
)};

function FloppyDrive(){
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.2;
    material.metalness = 0.7;

    const [textTexture]= useTexture(["static/3d/textures/matcaps/2.png"]);
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: textTexture});
    const meshRef = useRef();

    const {nodes, materials} = useGLTF("/static/3d/AppleComputerFloppyDrive.gltf");
    return(
      <group position={[2.89, -1.61, -1.21]} scale={[1, 0.48, 0.79]}  rotation={[0, (Math.PI * -0.5), 0]} ref={meshRef} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
        //   material={materials["MainPC.004"]}
          material={material}

        />
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

        />
      </group>)};


function ComputerMonitor3d(){

    function HtmlBox() {
        const [hidden, setVisible] = useState(false)
        const [loading, setIsLoading] = useState(false)
        const boxRef = useRef();
    
        function buttonHandler(){
            setIsLoading(prev => !prev)
        }
        return (
          <mesh scale={[0.1,0.1,0.1]} ref={boxRef} position={[0,0,0]}
            //keep the mesh Relative size to the viewport
            //   scale={(viewport.width / 10) * size}
            >
            {/* <boxGeometry  args={[35,30,25]} /> */}
            <meshStandardMaterial />
            <Html
              style={{
                transition: 'all 0.2s',
                height:"100vh",
                width: "100vw",
                textAlign: "center",
                alignItems: "center",
                opacity: hidden ? 0 : 1,
                transform: `scale(${hidden ? 0.5 : 1})`
              }}
              center
              position={[0, 0, 10]}
              transform
              occlude={[meshRef]}
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
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshStandardMaterial({
            color: '#fff',
            metalness: 0,
            roughness: 0.5
        })
    )
    floor.receiveShadow = true;
    floor.rotation.x = - Math.PI * 0.5
    const [textTexture]= useTexture(["static/3d/textures/matcaps/2.png"]);
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: textTexture});

    const monitor = useLoader(GLTFLoader, "/static/3d/ComputerNoScreen.gltf");


    const monitorScreen = useLoader(GLTFLoader, "/static/3d/ComputerScreen.gltf");
    const keyboard = useLoader(GLTFLoader, "/static/3d/AppleComputerKeyboard.gltf");
    const floppyDrive = useLoader(GLTFLoader, "/static/3d/AppleComputerFloppyDrive.gltf");
    const mouse = useLoader(GLTFLoader, "/static/3d/AppleComputerMouse.gltf");
    const meshRef = useRef();
    
    const {nodes, materials} = useGLTF("/static/3d/ComputerNoScreen.gltf");
    //     <primitive object={monitor.scene}>
    // </primitive>

    function CreateCssPlane(element) {
        // Create CSS3D object
        const object = new CSS3DObject(element);

        // copy monitor position and rotation
        object.position.copy(this.position);
        object.rotation.copy(this.rotation);

        // Add to CSS scene
        cssScene.add(object);

        // Create GL plane
        const material = new THREE.MeshLambertMaterial();
        material.side = THREE.DoubleSide;
        material.opacity = 0;
        material.transparent = true;
        // NoBlending allows the GL plane to occlude the CSS plane
        material.blending = THREE.NoBlending;

        // Create plane geometry
        const geometry = new THREE.PlaneGeometry(
            screenSize.width,
            screenSize.height
        );

        // Create the GL plane mesh
        const mesh = new THREE.Mesh(geometry, material);

        // Copy the position, rotation and scale of the CSS plane to the GL plane
        mesh.position.copy(object.position);
        mesh.rotation.copy(object.rotation);
        mesh.scale.copy(object.scale);

        // Add to gl scene
        scene.add(mesh);
    }
    
    // const overlay = new THREE.Mesh(
    //     new THREE.PlaneGeometry(10000, 10000),
    //     new THREE.ShaderMaterial({
    //         // vertexShader: screenVert,
    //         // fragmentShader: screenFrag,
    //         uniforms: this.uniforms,
    //         depthTest: false,
    //         depthWrite: false,
    //     })
    // );

   return(
    <>
        {/* <HtmlBox>

</HtmlBox> */}
        {/* <TestBox /> */}
        <Monitor ref={meshRef} />
        <Suspense fallback={null}>
            <ComputerScreen meshref={meshRef} />
        </Suspense>
        <Keyboard />
        <FloppyDisk />
        <Mouse />
        <FloppyDrive />
      {/* <group position={[0,0,0]} scale={[1,1,1]} rotation={[0,(Math.PI * -0.5),0]} ref={meshRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={textMaterial}
        //   material={materials["MainPC.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={textMaterial}

        //   material={materials["Back.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={textMaterial}

        //   material={materials["RedLight.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={textMaterial}

        //   material={materials["Chocofur_Glossy_Basic.011"]}
        />
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={textMaterial}

        //   material={materials["Chocofur_Glossy_Basic.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={textMaterial}

        //   material={materials["Chocofur_Glossy_Basic.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}         
           material={textMaterial}
        //   material={materials["Chocofur_Glossy_Basic.008"]}
        />
      </group>         */}

      {/* <mesh position={[0,-2,0]} scale={[1,1,1]} rotation={[0,(Math.PI * -0.5),0]} ref={meshRef} receiveShadow castShadow>
            <primitive object={monitor.scene.children[0]} receiveShadow castShadow />
            <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[0,-2,0]} scale={[1,1,1]} rotation={[0,(Math.PI * -0.5),0]} receiveShadow castShadow>
            <primitive object={keyboard.scene.children[0]} />
            <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[0,-2,0]} scale={[1,1,1]} rotation={[0,(Math.PI * -0.5),0]} receiveShadow castShadow>
            <primitive object={mouse.scene.children[0]} />
            <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[0,-2,0]} scale={[1,1,1]} rotation={[0,(Math.PI * -0.5),0]} receiveShadow castShadow >
            <primitive object={floppyDrive.scene.children[0]} />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh position={[0,-2,0]} scale={[1,1,1]} rotation={[0,(Math.PI * -0.5),0]} receiveShadow castShadow>
            <primitive object={monitorScreen.scene.children[0]} />
            <meshStandardMaterial color="orange" />
        </mesh> */}
        <mesh position={[0,-2.1,-1]} scale={[10,10,10]} rotation={[0,(Math.PI * -0.5),0]} receiveShadow castShadow>
            <primitive object={floor} />
        </mesh>

    
    </>

);}

export default ComputerMonitor3d;