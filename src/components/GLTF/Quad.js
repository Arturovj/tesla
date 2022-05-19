/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: bubelrobert (https://sketchfab.com/bubelrobert)
license: SKETCHFAB Editorial (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/tesla-cyber-quad-cybertruck-atv-729de7625ed34f4fac381ca35d01f364
title: Tesla Cyber quad - Cybertruck ATV
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/quad.gltf')
  return (
    <group ref={group} {...props} dispose={null}>

      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh position={[-0.2, -0.9, -0.2]} scale={0.03}>
          <group position={[0, 0.63, -45.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.BODY_2_ATV_BLACK_0.geometry} material={materials.ATV_BLACK} />
            <mesh geometry={nodes.BODY_2_ATV_BLACK_0_1.geometry} material={materials.ATV_BLACK} />
            <mesh geometry={nodes.BODY_2_ATV_CHROME_0.geometry} material={materials.ATV_CHROME} />
            <mesh geometry={nodes.BODY_2_ATV_SEAT_0.geometry} material={materials.ATV_SEAT} />
            <mesh geometry={nodes.BODY_2_ATV_RIM_0.geometry} material={materials.ATV_RIM} />
          </group>
          <group position={[-0.44, -62.43, -27]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.BODY_1_ATV_METALLIC_0.geometry} material={materials.ATV_METALLIC} />
            <mesh geometry={nodes.BODY_1_ATV_BLACK_0.geometry} material={materials.ATV_BLACK} />
            <mesh geometry={nodes.BODY_1_ATV_CHROME_0.geometry} material={materials.ATV_CHROME} />
            <mesh geometry={nodes.BODY_1_ATV_CHROME_0_1.geometry} material={materials.ATV_CHROME} />
            <mesh geometry={nodes.BODY_1_ATV_RIM_0.geometry} material={materials.ATV_RIM} />
            <mesh geometry={nodes.BODY_1_ATV_TIRE_0.geometry} material={materials.ATV_TIRE} />
            <mesh geometry={nodes.BODY_1_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.BODY_1_light_0.geometry} material={materials.light} />
          </group>
          <group position={[-47.47, 29.93, 59.98]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.RIGHT_FRONT_WHEEL_ATV_TIRE006_0.geometry} material={materials['ATV_TIRE.006']} />
            <mesh geometry={nodes.RIGHT_FRONT_WHEEL_ATV_RIM006_0.geometry} material={materials['ATV_RIM.006']} />
          </group>
          <group position={[46.6, 29.93, 59.98]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.LEFT_FRONT_WHEEL_ATV_TIRE006_0.geometry} material={materials['ATV_TIRE.006']} />
            <mesh geometry={nodes.LEFT_FRONT_WHEEL_ATV_RIM006_0.geometry} material={materials['ATV_RIM.006']} />
          </group>
          <group position={[41.91, 29.93, -54.56]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.RIGHT_BACK_WHEEL_ATV_TIRE006_0.geometry} material={materials['ATV_TIRE.006']} />
            <mesh geometry={nodes.RIGHT_BACK_WHEEL_ATV_RIM006_0.geometry} material={materials['ATV_RIM.006']} />
          </group>
          <group position={[41.91, 29.93, -54.56]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.LEFT_BACK_WHEEL_ATV_TIRE006_0.geometry} material={materials['ATV_TIRE.006']} />
            <mesh geometry={nodes.LEFT_BACK_WHEEL_ATV_RIM006_0.geometry} material={materials['ATV_RIM.006']} />
          </group>
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/quad.gltf')
