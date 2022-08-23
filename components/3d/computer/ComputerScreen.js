// Imports
import { Html } from "@react-three/drei";
import { useState, useRef } from "react";
import ComputerScreenContent from "./ComputerScreenContent";

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
            <ComputerScreenContent />
        </Html>
    </mesh>
</group>
    )
}

export default ComputerScreen;