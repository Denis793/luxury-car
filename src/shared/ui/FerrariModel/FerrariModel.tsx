'use client';
import * as THREE from 'three';
import { colorsCar } from '@/types/colorCars';
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { JSX } from 'react';
import { useIsClient } from '@/shared/hooks/useIsClient';

type Iprops = {
  colorState: colorsCar;
} & JSX.IntrinsicElements['group'];

const objCores = {
  red: '#9e0000',
  purple: '#380038',
  yellow: '#dfdb00',
  green: '#123a00',
};

const FerrariModel = ({ colorState, ...props }: Iprops) => {
  const { scene, materials } = useGLTF('/ferrari.glb');

  useEffect(() => {
    if (materials?.Vehicle_Exterior_mm_ext) {
      const m = materials.Vehicle_Exterior_mm_ext as THREE.MeshStandardMaterial;
      m.color.set(new THREE.Color(objCores[colorState]));
      m.map = null;
    }
  }, [colorState, materials]);

  return <primitive object={scene} {...props} />;
};

export const Ferrari = ({ colorState, ...props }: Iprops) => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return <FerrariModel colorState={colorState} {...props} />;
};
