/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Twin Dragon Studios (https://sketchfab.com/RHALL)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/plane-crashes-in-water-animated-scene-building-ad749975006d415fa654015ff7d5e9e8
Title: Plane Crashes In Water - Animated Scene Building
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PlaneModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene-transformed.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="c15b6d0056324250a23f89b1b9ac1b95fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[0, -545.49, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={491.49}
                >
                  <group name="Object_14">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.Tree}
                      skeleton={nodes.Object_20.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Planegroup1"
                  position={[844.75, -1208.53, 1246.65]}
                  rotation={[0.81, -0.45, -0.13]}
                  scale={[0.56, 0.53, 0.51]}
                >
                  <group
                    name="PlanePropeller_1"
                    position={[755.81, -46.02, 401.43]}
                  >
                    <mesh
                      name="PlanePropeller_1_PlaneRed_0"
                      geometry={nodes.PlanePropeller_1_PlaneRed_0.geometry}
                      material={materials.PlaneRed}
                    />
                    <mesh
                      name="PlanePropeller_1_PlaneBody_0"
                      geometry={nodes.PlanePropeller_1_PlaneBody_0.geometry}
                      material={materials.PlaneBody}
                    />
                  </group>
                  <group
                    name="PlanePhysical_Sky"
                    position={[754.94, 0, 0]}
                    rotation={[-0.05, -0.5, 0]}
                  />
                  <group name="PlanePlane" position={[752.4, -22.78, 0]}>
                    <group
                      name="PlaneWheel_Back"
                      position={[3.22, -59.61, -256.32]}
                      rotation={[0.17, 0, -0.02]}
                    >
                      <group
                        name="PlaneCylinder_1"
                        position={[6.52, -27.54, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="PlaneCylinder_1_PlaneBody_0"
                          geometry={nodes.PlaneCylinder_1_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group
                        name="PlaneWheelCarcas"
                        position={[114.39, 59.17, 0]}
                      >
                        <mesh
                          name="PlaneWheelCarcas_PlaneBody_0"
                          geometry={nodes.PlaneWheelCarcas_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group
                        name="PlaneWheel"
                        position={[0.62, -32.49, 0]}
                        rotation={[0, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="PlaneWheel_PlaneGum_0"
                          geometry={nodes.PlaneWheel_PlaneGum_0.geometry}
                          material={materials.PlaneGum}
                        />
                      </group>
                    </group>
                    <group
                      name="PlaneWheel_1"
                      position={[81.31, -76.38, 232.74]}
                      rotation={[0, 0, 0.33]}
                    >
                      <group
                        name="PlaneCylinder_1_2"
                        position={[12.17, -51.44, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="PlaneCylinder_1_2_PlaneBody_0"
                          geometry={
                            nodes.PlaneCylinder_1_2_PlaneBody_0.geometry
                          }
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group
                        name="PlaneWheelCarcas_2"
                        position={[213.61, 110.5, 0]}
                      >
                        <mesh
                          name="PlaneWheelCarcas_2_PlaneBody_0"
                          geometry={
                            nodes.PlaneWheelCarcas_2_PlaneBody_0.geometry
                          }
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group
                        name="PlaneWheel_2"
                        position={[1.16, -60.67, 0]}
                        rotation={[0, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="PlaneWheel_2_PlaneGum_0"
                          geometry={nodes.PlaneWheel_2_PlaneGum_0.geometry}
                          material={materials.PlaneGum}
                        />
                      </group>
                    </group>
                    <group
                      name="PlaneWheel_3"
                      position={[-81.57, -76.38, 232.74]}
                      rotation={[0, 0, -0.32]}
                    >
                      <group
                        name="PlaneCylinder_1_3"
                        position={[12.17, -51.44, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="PlaneCylinder_1_3_PlaneBody_0"
                          geometry={
                            nodes.PlaneCylinder_1_3_PlaneBody_0.geometry
                          }
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group
                        name="PlaneWheelCarcas_3"
                        position={[213.61, 110.5, 0]}
                      >
                        <mesh
                          name="PlaneWheelCarcas_3_PlaneBody_0"
                          geometry={
                            nodes.PlaneWheelCarcas_3_PlaneBody_0.geometry
                          }
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group
                        name="PlaneWheel_4"
                        position={[1.16, -60.67, 0]}
                        rotation={[0, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="PlaneWheel_4_PlaneGum_0"
                          geometry={nodes.PlaneWheel_4_PlaneGum_0.geometry}
                          material={materials.PlaneGum}
                        />
                      </group>
                    </group>
                    <group
                      name="PlaneAir_motor_right"
                      position={[0, -45.57, 0]}
                      rotation={[0, 0, -Math.PI]}
                    >
                      <group name="PlaneCube_2">
                        <mesh
                          name="PlaneCube_2_PlaneBody_0"
                          geometry={nodes.PlaneCube_2_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group name="PlaneCube_1">
                        <mesh
                          name="PlaneCube_1_PlaneBody_0"
                          geometry={nodes.PlaneCube_1_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group name="PlaneCube">
                        <mesh
                          name="PlaneCube_PlaneBody_0"
                          geometry={nodes.PlaneCube_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                    </group>
                    <group name="PlaneAir_motor_left" position={[0, 22.78, 0]}>
                      <group name="PlaneCube_2_2">
                        <mesh
                          name="PlaneCube_2_2_PlaneBody_0"
                          geometry={nodes.PlaneCube_2_2_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group name="PlaneCube_1_2">
                        <mesh
                          name="PlaneCube_1_2_PlaneBody_0"
                          geometry={nodes.PlaneCube_1_2_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                      <group name="PlaneCube_2_3">
                        <mesh
                          name="PlaneCube_2_3_PlaneBody_0"
                          geometry={nodes.PlaneCube_2_3_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                      </group>
                    </group>
                    <group name="PlaneBody1" position={[0, 22.78, 0]}>
                      <group name="PlaneCube_1_3">
                        <mesh
                          name="PlaneCube_1_3_PlaneBody_0"
                          geometry={nodes.PlaneCube_1_3_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                        <mesh
                          name="PlaneCube_1_3_PlaneRed_0"
                          geometry={nodes.PlaneCube_1_3_PlaneRed_0.geometry}
                          material={materials.PlaneRed}
                        />
                        <mesh
                          name="PlaneCube_1_3_PlaneGlass_0"
                          geometry={nodes.PlaneCube_1_3_PlaneGlass_0.geometry}
                          material={materials.PlaneGlass}
                        />
                        <mesh
                          name="PlaneCube_1_3_Default_Material_0"
                          geometry={
                            nodes.PlaneCube_1_3_Default_Material_0.geometry
                          }
                          material={materials.Default_Material}
                        />
                      </group>
                      <group name="PlaneCube_3">
                        <mesh
                          name="PlaneCube_3_PlaneBody_0"
                          geometry={nodes.PlaneCube_3_PlaneBody_0.geometry}
                          material={materials.PlaneBody}
                        />
                        <mesh
                          name="PlaneCube_3_PlaneRed_0"
                          geometry={nodes.PlaneCube_3_PlaneRed_0.geometry}
                          material={materials.PlaneRed}
                        />
                        <mesh
                          name="PlaneCube_3_PlaneGlass_0"
                          geometry={nodes.PlaneCube_3_PlaneGlass_0.geometry}
                          material={materials.PlaneGlass}
                        />
                        <mesh
                          name="PlaneCube_3_Default_Material_0"
                          geometry={
                            nodes.PlaneCube_3_Default_Material_0.geometry
                          }
                          material={materials.Default_Material}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="pSphere1"
                  position={[0.15, -0.08, 0.1]}
                  scale={148.04}
                >
                  <mesh
                    name="pSphere1_lambert1_0"
                    geometry={nodes.pSphere1_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group
                  name="pSphere2"
                  position={[0.15, -0.08, 0.1]}
                  scale={145.13}
                >
                  <mesh
                    name="pSphere2_InnerCircle_0"
                    geometry={nodes.pSphere2_InnerCircle_0.geometry}
                    material={materials.InnerCircle}
                  />
                </group>
                <group
                  name="pSphere3"
                  position={[0.15, -0.08, 0.1]}
                  scale={143.73}
                >
                  <mesh
                    name="pSphere3_WaterRefractionLayer_0"
                    geometry={nodes.pSphere3_WaterRefractionLayer_0.geometry}
                    material={materials.WaterRefractionLayer}
                  />
                  <mesh
                    name="pSphere3_WaterSurface_0"
                    geometry={nodes.pSphere3_WaterSurface_0.geometry}
                    material={materials.WaterSurface}
                  />
                </group>
                <group
                  name="Island"
                  position={[0.36, -650.18, 0.02]}
                  scale={[188.15, 24.61, 209.88]}
                >
                  <mesh
                    name="Island_Sand_0"
                    geometry={nodes.Island_Sand_0.geometry}
                    material={materials.Sand}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
