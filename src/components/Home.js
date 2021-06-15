import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

/*
  variants are a way to extract code and use them as variables.
  it's important to use the variants prop on the motion element and declare the prop with each variant name
  you can also EMBED the transitions on there

  
  When used on a parent container, we don't need to use initial, animate etc props on it's children.
  It's inhereted as long as the prop names are the same
*/

const buttonVariants = {
  /*
    keyframes are used to make a pattern, can be used using array syntax for example
    
    visible: {
      x: [0, -20, 20, -20, 20, 0]
      transition: { delay: 2 }
    }
  */
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      /* Yoyo allow us to repeat animation instead of using keyframes
        In this example it will scale (1.1) 5 times back and forth
      */
      yoyo: 5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  /*
    Since animated precense is sorrounding the switch router, we can use the exit prop on the motion elements
  */
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
