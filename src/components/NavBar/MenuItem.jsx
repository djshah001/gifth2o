import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i, NavItem, to, toggle, iconClass }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        <i class={iconClass}></i>
      </div>
      <NavLink
        className="text-placeholder"
        style={style}
        onClick={toggle}
        to={`/${to}`}
      >
        {NavItem}
      </NavLink>
    </motion.li>
  );
};

export default MenuItem;
