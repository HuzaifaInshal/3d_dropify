import React,{useState,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const Info = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (inView) {
      const delay = 400;
      const cards = document.querySelectorAll(".card");

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate__animated", "animate__fadeInLeft","block");
        }, index * delay);
      });

      setTimeout(() => {
        setShowCards(true);
      }, cards.length * delay);
    }
  }, [inView]);
  return (
    <>
    <section id='sec2'>
      <div className="container">
      <h1  className={`sec2-h1 animate__animated ${inView ? 'animate__fadeInUp block' : ''}`}>Fast, Reliable and Convenient Delivery</h1>
      <p  className={(inView ? 'animate__animated  animate__fadeInDown block':'sec2-p')}>Enjoy your time with offers in everything you need</p>
      <div  className={"btn-holder"}>
        <button className={ (inView ? 'animate__animated  animate__fadeInRight sec2-btn-1 block':'sec2-btn-1')}>Order Delivery</button>
        <button className={ (inView ? 'animate__animated  animate__fadeInLeft sec2-btn-2 block':'sec2-btn-2')}>Try out our new features</button>
      </div>
      <div ref={ref} className="cards-holder">
      <div className={`card ${showCards ? "animate__animated animate__fadeInLeft block" : ""}`}>
        <h1>Robots Driver</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam laboriosam sed provident! Esse ullam enim aspernatur fugit dolore, similique suscipit dolores nesciunt ad deserunt, minima quas. Temporibus, earum rerum!</p>
      </div>
      <div className={`card ${showCards ? "animate__animated animate__fadeInLeft block" : ""}`}>
        <h1>Online Delivery Ordering</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsum magnam, animi excepturi aliquam temporibus nisi sed, voluptatibus ratione blanditiis fugit quisquam dolores</p>
      </div>
      <div className={`card ${showCards ? "animate__animated animate__fadeInLeft block" : ""}`}>
        <h1>Our Support Team</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vel, ullam ducimus maiores saepe commodi omnis at in incidunt qui nobis atque ratione neque explicabo aut expedita necessitatibus temporibus! Omnis!</p>
      </div>
    </div>
      </div>
    </section>
    
    </>
  )
}

export default Info