import sparky from "../assets/imgs/demo.png"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0, 
    transition: { duration: 1, ease: "easeInOut" }
  },
};

function Endeavors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  return (
    <motion.section id="endeavors" className="main-section centered animate fade-up"
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={sectionVariants}
    >
      <h2 className="highlight-first">Endeavors</h2>
      <img
        src={sparky}
        alt="Image of a 2d polygon map"
        draggable="false"
      />
      <div className="centered">
        <a href="https://github.com/dreyso/sparky">
          <h3>Sparky (C++ game engine with SDL 2) 2021 - Present</h3>
        </a>
        <ul>
          <li>
            Implemented an architecture pattern (ECS) designed to minimize
            cache misses.
          </li>
          <li>
            Translated principles of classical mechanics into a discrete,
            frame-based simulation.
          </li>
          <li>
            Designed an algorithm that prunes unnecessary nodes in a graph
            used for entity pathfinding, resulting in a large runtime
            improvement.
          </li>
          <li>
            Built a polygon class capable of resolving collisions,
            triangulating, rotating around the centroid, and identifying
            convex edges, vertex orientation, self-intersections, and
            collinear edges.
          </li>
          <li>
            Implemented a component capable of reading and organizing polygons
            from an SVG file into a reference grid.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Endeavors;
