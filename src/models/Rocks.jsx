import React from 'react'

const Rocks = (props) => {
  return (
    <>
        <group {...props}>
            <mesh  receiveShadow castShadow>
      <boxGeometry  args={[0.5, 0.5, 0.5]} />
      <meshMatcapMaterial  color={props.color} />
    </mesh>
    </group>
    </>
  )
}

export default Rocks