import React, { useRef, useEffect } from 'react';
import Bus from './Bus'
import gsap from 'gsap';

const BusScene = () => {
  const stand = 0.05;
    const modelRef = useRef();
  const modelRef2 = useRef();
  const modelRef3 = useRef();
  const modelRef4 = useRef();
  const modelRef5 = useRef();
  const modelRef6 = useRef();

  const animateBlueBus=()=>{
    const rotation_duration = 2;
    const linear_rotation_duration = 2;
    const linear_Duration = 3;
    const delay=-0.2;
    const animation = gsap.timeline({
        repeat:-1
    })
    animation.to(modelRef6.current.position,{
        x:2,
        duration:linear_Duration,
    })
    animation.to(modelRef6.current.position,{
        x:2.25,
        y:1.75,
        duration:linear_rotation_duration,
        delay:delay
    },">")
    animation.to(modelRef6.current.rotation,{
        y:(-(Math.PI/180)*90),
        duration:rotation_duration,
    },"<")
    animation.to(modelRef6.current.position,{
        y:-1,
        duration:linear_Duration,
    },">")
    animation.to(modelRef6.current.position,{
        x:2,
        y:-1.25,
        duration:linear_rotation_duration,
        delay:delay
    },">")
    animation.to(modelRef6.current.rotation,{
        y:(-(Math.PI/180)*180),
        duration:rotation_duration,
    },"<")
    animation.to(modelRef6.current.position,{
        x:-3,
        duration:linear_Duration,
    },">")
    animation.to(modelRef6.current.position,{
        x:-3.25,
        y:-1,
        duration:linear_rotation_duration,
    },">")
    animation.to(modelRef6.current.rotation,{
        y:(-(Math.PI/180)*270),
        duration:rotation_duration,
    },"<")
    animation.to(modelRef6.current.position,{
        y:1.75,
        duration:linear_Duration,
    },">")
    animation.to(modelRef6.current.position,{
        x:-3,
        y:2,
        duration:linear_rotation_duration,
        delay:delay
    },">")
    animation.to(modelRef6.current.rotation,{
        y:(-(Math.PI/180)*360),
        duration:rotation_duration,
    },"<")
}

    const animatePurpleBus=()=>{
        const animation = gsap.timeline({
            repeat:-1,yoyo:true
             });
        animation.to(modelRef5.current.position,{
            x:-3,
            duration:5,
            ease: "power3.inOut"
        })
        animation.to(modelRef4.current.position,{
            x:-2.65,
            duration:4,
            ease: "power3.inOut"
        },"<+1")
    }

  const animateGreenBus=()=>{
    const animation = gsap.timeline({
      repeat: -1,yoyo:true });
      animation.to(modelRef2.current.position,{
        y:-0.2,
        duration:2
      })
  }
  const animateYelloBus=()=>{
    const animation = gsap.timeline({
      repeat: -1,yoyo:true });
      animation.to(modelRef3.current.position,{
        y:0.2,
        duration:2
      })
  }
  
  const animateSkyBlueBus = () => {
    const de=-0.6;
    const animation = gsap.timeline({
      repeat: -1, 
    });
    animation.to(modelRef.current.position, {
      y: 0,
      duration: 3, 
    });
    animation.to(modelRef.current.position, {
      x:2.7,
      y: -0.25,
      duration: 1, 
      delay:de
    },">");
    animation.to(modelRef.current.rotation, {
      y: 0,
      duration: 1, 
    },"<");
    animation.to(modelRef.current.position, {
      x:2.5,
      y: 0,
      duration: 1, 
      delay:de
    },">");
    animation.to(modelRef.current.rotation, {
      y: (-(Math.PI/180)*90),
      duration: 1, 
    },"<");

    animation.to(modelRef.current.position, {
      y: 2,
      duration: 3, 
      delay:de
    },">");
    animation.to(modelRef.current.position, {
      x:2.7,
      y: 2.25,
      duration: 1, 
      delay:de
    },">");
    animation.to(modelRef.current.rotation, {
      y: (-(Math.PI/180)*180),
      duration: 1, 
    },"<");
    animation.to(modelRef.current.position, {
      x:3,
      y: 2,
      duration: 1, 
      delay:de
    },">");
    animation.to(modelRef.current.rotation, {
      y: (-(Math.PI/180)*270),
      duration: 1, 
    },"<");
  };

  React.useEffect(() => {
    animateSkyBlueBus();
    animateGreenBus();
    animateYelloBus();
    animatePurpleBus();
    animateBlueBus();
  }, []);
  return (
    <>
    <mesh ref={modelRef6} scale={0.15} position={[-3, 2, stand]} rotation={[((Math.PI / 180) * 90), 0,0 ]} >
    <Bus color={'blue'}/>
</mesh>
<mesh ref={modelRef3} scale={0.15} position={[0.9, -0.2, stand]} rotation={[((Math.PI / 180) * 90), ((Math.PI / 180) * 90),0 ]} >
    <Bus color={'yellow'}/>
</mesh>
<mesh ref={modelRef2} scale={0.15} position={[0.64, 0.2, stand]} rotation={[((Math.PI / 180) * 90), ((Math.PI / 180) * 90),0 ]} >
    <Bus color={'green'}/>
</mesh>
<mesh ref={modelRef4} scale={0.15} position={[3, -2, stand]} rotation={[((Math.PI / 180) * 90), 0,0 ]} >
    <Bus color={'purple'}/>
</mesh>
<mesh ref={modelRef5} scale={0.15} position={[2.65, -2, stand]} rotation={[((Math.PI / 180) * 90), 0,0 ]} >
    <Bus color={'purple'}/>
</mesh>
<mesh ref={modelRef} scale={0.15} position={[3,2, stand]} rotation={[((Math.PI / 180) * 90), ((Math.PI / 180) * 90),0 ]} > 
    <Bus color={'skyblue'}/>
</mesh>
</>
  )
}

export default BusScene