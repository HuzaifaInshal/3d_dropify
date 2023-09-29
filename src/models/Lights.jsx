import React from 'react'

const Lights = () => {
  return (
    <>
    {/* <pointLight args={['#ffffff',150]} castShadow position={[-3,0,3]}/> */}
    <spotLight args={["#f9fc05", 300, 7, ((Math.PI/180)*45), 0.4]} position={[-5, 4, 2]} castShadow />
    <spotLight args={["#f9fc05", 300, 7, ((Math.PI/180)*45), 0.4]} position={[5, -4, 2]} castShadow />
    <spotLight args={["#fc1105", 300, 7, ((Math.PI/180)*45), 0.4]} position={[-5, -4, 2]} castShadow />
    <spotLight args={["#fc1105", 300, 7, ((Math.PI/180)*45), 0.4]} position={[5, 4, 2]} castShadow />
    <ambientLight args={["#ffffff", 2]} />
    </>
  )
}

export default Lights