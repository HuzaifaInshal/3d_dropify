import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Main from './Main'

const Canva = () => {
  return (
    <>
    <div id='canvas'>
    <Canvas shadows>
    <Suspense fallback={null}>
     <Main />        
   </Suspense>
    </Canvas>
    </div>
    </>
  )
}

export default Canva
