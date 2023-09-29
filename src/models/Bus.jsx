import React from 'react'

const Model = (props) => {
  return (
    <>
    <group {...props}>
    <mesh castShadow position={[0,0,0]}>
        <boxGeometry args={[1.6,0.3,0.6]}/>
        <meshMatcapMaterial color="#ccd6e6" />
    </mesh>
    <mesh castShadow position={[0,0.3,0]}>
        <boxGeometry args={[1.6,0.3,0.6]}/>
        <meshMatcapMaterial color={props.color} />
    </mesh>
    <mesh castShadow position={[0.54,-0.1,0.34]} rotation={[((Math.PI/180)*90),0,0]}>
        <cylinderGeometry args={[0.2,0.2,0.08,64,1]}/>
        <meshStandardMaterial color="black" />
    </mesh>
    <mesh castShadow position={[-0.54,-0.1,0.34]} rotation={[((Math.PI/180)*90),0,0]}>
        <cylinderGeometry args={[0.2,0.2,0.08,64,1]}/>
        <meshStandardMaterial color="black" />
    </mesh>

    <mesh castShadow position={[0.54,-0.1,-0.34]} rotation={[((Math.PI/180)*90),0,0]}>
        <cylinderGeometry args={[0.2,0.2,0.08,64,1]}/>
        <meshStandardMaterial color="black" />
    </mesh>
    <mesh castShadow position={[-0.54,-0.1,-0.34]} rotation={[((Math.PI/180)*90),0,0]}>
        <cylinderGeometry args={[0.2,0.2,0.08,64,1]}/>
        <meshStandardMaterial color="black" />
    </mesh>
    <mesh castShadow position={[0.8,0.25,0]}>
        <boxGeometry args={[0.01,0.3,0.6]}/>
        <meshMatcapMaterial color="yellow" />
    </mesh>
    </group>

    </>
  )
}

export default Model