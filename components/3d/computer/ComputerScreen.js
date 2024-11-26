// Imports
import { OrbitControls, useTexture, Html, Box, Effects } from "@react-three/drei";
import { useState, useRef } from "react";
import ComputerScreenContent from "./ComputerScreenContent";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Outline, Select, Selection } from '@react-three/postprocessing'
import * as THREE from 'three'

function ComputerScreen(props){
        const [hidden, setVisible] = useState(false)
        const [loading, setIsLoading] = useState(false)
        const boxRef = useRef();
        const box2Ref = useRef();
        const box3Ref = useRef();

        const bShowSides = false;

        function buttonHandler(){
            setIsLoading(prev => !prev)
        }

        const [reflection, shadow, smudge] = useTexture([
            "/static/3d/textures/compressed/reflection-compressed.png",
            "/static/3d/textures/compressed/shadow-compressed.png",
            "/static/3d/textures/compressed/smudges.jpg",
          ]);
          const textureLayers = [
            { texture: reflection, blending: THREE.AdditiveBlending, opacity: 1.3, offset: 0.2 },
            { texture: shadow, blending: THREE.AdditiveBlending, opacity: 1.8, offset: 0.2 },
            { texture: smudge, blending: THREE.AdditiveBlending, opacity: 1.1, offset: 0.2 },
          ];
        


    return (
<group>

    {/* These are here for occluding the screen when rotating */}
    <mesh scale={[0.1,0.1,0.1]} position={[0,0,-0.75]} ref={boxRef} >
        <boxGeometry  args={[35,30,25]} />
        <meshStandardMaterial visible={bShowSides} />
    </mesh>
    <mesh scale={[0.02,0.1,0.1]} position={[1.5,0,-0.5]} ref={box2Ref}  >
        <boxGeometry  args={[35,30,25]} />
        <meshStandardMaterial visible={bShowSides} />
    </mesh>
    <mesh scale={[0.02,0.1,0.1]} position={[-1.9,0,-0.475]}  ref={box3Ref} >
        <boxGeometry  args={[35,30,25]} />
        <meshStandardMaterial visible={bShowSides} />
    </mesh>
    <mesh scale={[1,1,0.01]} position={[-0.27,0.2,0.6]} castShadow  receiveShadow >
        <boxGeometry  args={[2.8,2.4,2.5]} />
        <meshStandardMaterial visible={true} color={0x000000} emissive={0x00000} emissiveIntensity={1}/>
    </mesh>
    {/* {textureLayers.map((layer, index) => (
        <mesh
          key={index}
          position={[-0.25, layer.offset, 0.7]} // Offset for depth stacking
        >
          <planeGeometry args={[2.8, 2.4]} />
          <meshBasicMaterial
            map={layer.texture}
            blending={layer.blending}
            // transparent
            zIndex={10000}
            opacity={layer.opacity}
          />
        </mesh>
      ))} */}

    <mesh scale={[0.1,0.1,0.1]}  position={[-0.25,0.25,-0.35]}
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
                // zIndexRange: [0, -10],
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
                <EffectComposer depthBuffer disableNormalPass renderPriority={1}>
                    {/* <Noise opacity={0.1} />         */}
                    {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
                </EffectComposer>

    </mesh>
</group>
    )
}

export default ComputerScreen;



// createTextureLayers()
// function createTextureLayers() {

//     // this.getVideoTextures('video-1');
//     // this.getVideoTextures('video-2');

//     // Scale factor to multiply depth offset by
//     const scaleFactor = 4;

//     // Construct the texture layers
//     const layers = {
//         smudge: {
//             texture: smudgeTexture,
//             blending: THREE.AdditiveBlending,
//             opacity: 0.12,
//             offset: 24,
//         },
//         innerShadow: {
//             texture: shadowTexture,
//             blending: THREE.NormalBlending,
//             opacity: 1,
//             offset: 5,
//         },
//         // video: {
//         //     texture: video_01,
//         //     blending: THREE.AdditiveBlending,
//         //     opacity: 0.5,
//         //     offset: 10,
//         // },
//         // video2: {
//         //     texture: video_02,
//         //     blending: THREE.AdditiveBlending,
//         //     opacity: 0.1,
//         //     offset: 15,
//         // },
//     };

//     // Declare max offset
//     let maxOffset = -1;

//     // Add the texture layers to the screen
//     for (const [_, layer] of Object.entries(layers)) {
//         const offset = layer.offset * scaleFactor;
//         addTextureLayer(
//             layer.texture,
//             layer.blending,
//             layer.opacity,
//             offset
//         );
//         // Calculate the max offset
//         if (offset > maxOffset) maxOffset = offset;
//     }

//     // Return the max offset
//     return maxOffset;
// }

// /**
// * Adds a texture layer to the screen
// * @param texture the texture to add
// * @param blending the blending mode
// * @param opacity the opacity of the texture
// * @param offset the offset of the texture, higher values are further from the screen
// */
// function addTextureLayer(
// texture,
// blendingMode,
// opacity,
// offset
// ) {
// // Create material
// const material = new THREE.MeshBasicMaterial({
//     map: texture,
//     blending: blendingMode,
//     side: THREE.DoubleSide,
//     opacity,
//     transparent: true,
// });

// // Create geometry
// const geometry = new THREE.PlaneGeometry(
//     this.screenSize.width,
//     this.screenSize.height
// );

// // Create mesh
// const mesh = new THREE.Mesh(geometry, material);

// // Copy position and apply the depth offset
// // mesh.position.copy(
// //     this.offsetPosition(this.position, new THREE.Vector3(0, 0, offset))
// // );

// // Copy rotation
// // mesh.rotation.copy(rotation);

// // scene.add(mesh);
// }
