import React from 'react'
import { useInView } from 'react-intersection-observer';

const Third = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, 
      });
  return (
    <>
    <section></section>
    <section id="sec3">
        <div  className="sec3-container">
            <div ref={ref}></div>
        <div className={ (inView ? 'animate__animated  animate__slideInLeft third-container flex':"third-container")}>
            <h1>Place Your First Order and Get 30% Off</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odio dolorem repudiandae nulla, ducimus quae perferendis rerum consequuntur porro quisquam impedit maiores, commodi necessitatibus cum. Suscipit aperiam id laudantium, unde, itaque officia rerum maxime quas quos voluptates consequatur atque placeat!</p>
            <button className='sec2-btn-1 block'>Lets Begin</button>
        </div>
        </div>
    </section>
    </>
  )
}

export default Third