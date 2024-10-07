import Slideshow from './slideshow';
import grad from "../assets/imgs/grad.webp"
import snow from "../assets/imgs/snow.webp"
import bike from "../assets/imgs/bike.webp"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const textVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)", // Fully masked from the right
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)", // Revealed completely
    transition: { duration: 1, ease: "easeInOut" }
  },
};

function Narrative() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  const images = [
    {
      src: grad,
      height: '2500',
      width: '2325',
      alt: 'Image of author in graduation gown',
    },
    {
      src: snow, 
      height: '2500',
      width: '2325',
      alt: 'Image of author on the slopes',
    },
    {
      src: bike, 
      height: '2500',
      width: '2325',
      alt: 'Image of a sports bike',
    },
  ];

  return (
    <section id="narrative" className="main-section">
      <Slideshow images={images} />
      <motion.div className="text-wrapper centered"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
        <h2 className="highlight-first">Narrative</h2>
        <p>
          Hi, I'm Andrey. I graduated from Portland State University (2024)
          and am looking for my first step beyond the traditional college
          study. Primarily interested in C/C++ development and low-level
          design. In my spare time, I'm either snowboarding or working on my
          motorcycle.
        </p>
      </motion.div>
    </section>
  );
}

export default Narrative;
