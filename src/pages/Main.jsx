import {  OrbitControls, PerspectiveCamera,Text  } from "@react-three/drei";
import { useRef,useEffect } from "react";
import FloorScene from "../models/FloorScene";
import BusScene from "../models/BusScene";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lights from "../models/Lights";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const objectRef = useRef(null);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#sec1', 
      start: 'top top',
      endTrigger: '#sec2', 
      end: 'top top',
      scrub: true, 
    },
  });
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#sec2', 
      start: 'top top',
      endTrigger: '#sec3', 
      end: 'top top',
      scrub: true, 
    },
  });

  useEffect(() => {
    if (objectRef.current) {
      tl.to(objectRef.current.position, {
        x: 2,
        y: 1,
        z:3,
        duration: 1,
      });
      tl.to(objectRef.current.position, {
        x: 2.5,
        y: -4,
        z:1,
        duration: 1,
      });
      tl.to(objectRef.current.rotation, {
        x: (Math.PI/180)*65,
        y: 0,
        z:0,
        duration: 1,
      },"<");
      t2.to(objectRef.current.position, {
        x: -7,
        y: 0,
        z:1,
        duration: 1,
      });
      t2.to(objectRef.current.rotation, {
        x: (Math.PI/180)*20,
        y: -(Math.PI/180)*90,
        z:-(Math.PI/180)*70,
        duration: 1,
      },"<");
    }
  }, [tl]);

  //0,0,5

  return (
    <>
    {/* <OrbitControls/> */}
    <PerspectiveCamera ref={objectRef} makeDefault position={[0,0,5]} 
    // rotation={[(Math.PI/180)*20,-(Math.PI/180)*90,-(Math.PI/180)*70]}
    /> 
    <FloorScene/>
    <BusScene/>
    <Lights/>
    </>
  )
}

export default Main