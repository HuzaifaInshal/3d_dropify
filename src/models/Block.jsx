import React from 'react'

const Block = (props) => {
  return (
    <group {...props}>
            <mesh  receiveShadow castShadow>
      <boxGeometry  args={[4, 0.2, 0.2]} />
      <meshMatcapMaterial  color="#ccd6e6" />
    </mesh>
    </group>
  )
}

export default Block