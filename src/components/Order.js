import React, { useEffect } from "react";
import { motion } from "framer-motion";

/*
  variants are a way to extract code and use them as variables.
  it's important to use the variants prop on the motion element and declare the prop with each variant name
  you can also EMBED the transitions on there

  
  When used on a parent container, we don't need to use initial, animate etc props on it's children.
  It's inhereted as long as the prop names are the same
*/

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      /* mass and damping are spring type transitions */
      mass: 0.4,
      damping: 8,
      /* Each children will stagger */
      staggerChildren: 0.4,
      /* -when- defines that we want the animation to COMPLETE before any children animation,
        that way the children animations will run after the parent animation.
      */
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  // useEffect lifecycle hook, array with only setShowModal as dep
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  /*
    Since animated precense is sorrounding the switch router, we can use the exit prop on the motion elements
  */

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
