// Imports
import { OrbitControls, useTexture, Html, Box, Effects } from "@react-three/drei";
import { useState, useRef } from "react";
import ComputerScreenContent from "./ComputerScreenContent";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Outline, Select, Selection } from '@react-three/postprocessing'

function ComputerScreen(props){
        const [hidden, setVisible] = useState(false)
        const [loading, setIsLoading] = useState(false)
        const boxRef = useRef();
        const box2Ref = useRef();
        const box3Ref = useRef();

        function buttonHandler(){
            setIsLoading(prev => !prev)
        }
    return (
<group>
    {/* These are here for occluding the screen when rotating */}
    <mesh scale={[0.1,0.1,0.1]} position={[0,0,-0.6]} ref={boxRef} >
        <boxGeometry  args={[35,30,25]} />
        <meshStandardMaterial visible={false} />
    </mesh>
    <mesh scale={[0.02,0.1,0.1]} position={[1.5,0,-0.5]} ref={box2Ref}  >
        <boxGeometry  args={[35,30,25]} />
        <meshStandardMaterial visible={false} />
    </mesh>
    <mesh scale={[0.02,0.1,0.1]} position={[-1.9,0,-0.5]}  ref={box3Ref} >
        <boxGeometry  args={[35,30,25]} />
        <meshStandardMaterial visible={false} />
    </mesh>
    {/*  */}
    <mesh scale={[1,1,0.01]} position={[-0.19,0.2,0.55]} castShadow  receiveShadow >
        <boxGeometry  args={[2.8,2.4,2.5]} />
        <meshStandardMaterial visible={true} color={0x0ff000} emissive={0x00f1ff} emissiveIntensity={1}/>
    </mesh>

    <mesh scale={[0.1,0.1,0.1]}  position={[-0.25,0.25,-0.3]}
            //keep the mesh Relative size to the viewport
            //   scale={(viewport.width / 10) * size}
            >
            {/* <boxGeometry  args={[35,30,25]} />
            <meshStandardMaterial /> */}
        <Html
            style={{
                transition: 'all 0.2s',
                height:"800px",
                width: "1050px",
                textAlign: "center",
                alignItems: "center",
                opacity: hidden ? 0 : 1,
                zIndexRange: [0, -10],
                zIndex: 0,
                transform: `scale(${hidden ? 0.5 : 1})`
            }}
            center
            position={[0, 0, 10]}
            transform
            // occlude
            occlude={[boxRef,box2Ref,box3Ref]}
            //   onOcclude={setVisible}
            >
            {/* <ComputerScreenContent /> */}
        </Html>
                <EffectComposer depthBuffer disableNormalPass renderPriority={1}>
                    {/* <Noise opacity={0.1} />         */}
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                </EffectComposer>
    </mesh>
</group>
    )
}

export default ComputerScreen;