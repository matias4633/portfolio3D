/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/dragon/scene.gltf 
Author: 3DHaupt (https://sketchfab.com/dennish2010)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/black-dragon-with-idle-animation-fb0053a2e59b43868e934c239bf4eb36
Title: Black Dragon with Idle Animation
*/

import React, { useRef , useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Dragon({ isMobile }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/dragon/scene.gltf')
  const { actions , names } = useAnimations(animations, group)
  const index = 0;
  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[index]].fadeOut(0.5);
    };
  }, []);
  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[0 , 0, 0]} scale={isMobile ? 0.000005 :0.000005} position={isMobile ? [0.02,0.02,-0.007109] : [0.02,0.02,-0.007109]} >
          <group name="aeeb858164ee4e0884da4001c74b8628fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Hemi" position={[4018.555, 4666.064, 3759.082]} rotation={[-2.595, 0.261, 0.387]} scale={0.002}>
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                  {/* <group name="Plane" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Plane_Material_0" geometry={nodes.Plane_Material_0.geometry} material={materials.Material} />
                </group>   */}
                <group name="Dragon_Idle" rotation={[Math.PI, 0, 0]} scale={100}>
                  <group name="Object_10">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_243" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_244" geometry={nodes.Object_244.geometry} material={materials.EYES} skeleton={nodes.Object_244.skeleton} />
                    <skinnedMesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials.Game_dragon} skeleton={nodes.Object_245.skeleton} />
                    <skinnedMesh name="Object_246" geometry={nodes.Object_246.geometry} material={materials['Game_dragon.001']} skeleton={nodes.Object_246.skeleton} />
                  </group>
                </group>
                <group name="Dragon" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dragon/scene.gltf')