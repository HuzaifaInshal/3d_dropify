import React from 'react'

const Cone = (props) => {
  return (
    <group {...props}>
            <mesh  receiveShadow castShadow>
      <coneGeometry   />
      <meshMatcapMaterial  color={props.color} />
    </mesh>
    </group>
  )
}
// args={[props.radius, props.height, props.segment]}
export default Cone