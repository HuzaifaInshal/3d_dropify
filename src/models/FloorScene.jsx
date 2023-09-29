import React from 'react'
import Block from './Block'
import { Text } from '@react-three/drei'
import Rocks from './Rocks'
import Cone from './Cone'

const FloorScene = () => {
  const stand = 0.07;
  return (
    <>

    <mesh rotation={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#ffffff" />
    </mesh>

    <Text color={"black"} position={[0,0,0.01]}>
        Dropify
    </Text>

    <Block position={[-2,0,stand]} rotation={[0,0,(Math.PI/180)*80]} scale={0.5}/>
    <Block position={[-2.4,0,stand]} rotation={[0,0,(Math.PI/180)*80]} scale={0.5}/>
    <Block position={[1.8,0,0.07]} rotation={[0,0,(Math.PI/180)*80]} scale={0.5}/>


    <Rocks position={[2.65,-1.75,stand]} color={"yellow"} scale={0.3} />
    <Rocks position={[2.45,-1.75,stand]} color={"yellow"} scale={0.2} />
    <Rocks position={[2.85,-1.5,stand]} color={"aqua"} scale={0.3} />
    <Rocks position={[2.73,1.9,stand]} color={"brown"} scale={0.2} />
    <Rocks position={[2.73,0.1,stand]} color={"brown"} scale={0.2} />
    <Rocks position={[-2.73,1.5,stand]} color={"red"} scale={0.2} />
    <Rocks position={[-2.73,1.7,stand]} color={"black"} scale={0.3} />
    <Rocks position={[-2.5,1.6,stand]} color={"orange"} scale={0.3} />
    <Rocks position={[-2.2,-1.75,stand]} color={"black"} scale={0.3} />
    <Rocks position={[-2.3,-1.6,stand]} color={"purple"} scale={0.2} />

    <Cone position={[-2.5,-1.75,stand]} color={"orange"} scale={0.1} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[2.95,-1.75,stand]} color="green" scale={0.1} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[3.3,2,stand]} color="green" scale={0.15} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[3.4,1.75,stand]} color="pink" scale={0.1} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[3.3,1.65,stand]} color="aqua" scale={0.1} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[-1.4,1,stand]} color="yellow" scale={0.15} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[-1.6,1.15,stand]} color="pink" scale={0.1} rotation={[(Math.PI/180)*90,0,0]}/>
    <Cone position={[-1.4,1.25,stand]} color="aqua" scale={0.1} rotation={[(Math.PI/180)*90,0,0]}/>

    
    </>
  )
}

export default FloorScene