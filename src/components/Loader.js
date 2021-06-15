import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    /*
      We use keyframes to animate the loader with the Infinity prop to make it repeat forever
    */
    x: [-20, 20],
    y: [0, -30],
    /*
      We can declare the transition for each prop in a different way just by using the same name
    */
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  // Thanks to this hook we can toggle between the animations
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Change Loader</div>
    </>
  );
};

export default Loader;
