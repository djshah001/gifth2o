import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import MenuDropDown from "./MenuDropDown";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants}>
    {/* {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))} */}
    <MenuItem
      i={0}
      NavItem="Home"
      toggle={toggle}
      iconClass="fa-solid fa-house"
      to=""
    />
    <MenuItem
      i={2}
      NavItem="About"
      toggle={toggle}
      iconClass="fa-solid fa-address-card"
      to="about"
    />
    <MenuDropDown
      i={1}
      MenuItems={[
        {
          NavItem: "Personalized Marketing",
          toggle: { toggle },
          iconClass: "fa-solid fa-bullhorn",
          to: "personalized-marketing",
        },
        {
          NavItem: "Digital Marketing",
          toggle: { toggle },
          iconClass: "fa-solid fa-bullhorn",
          to: "Digital-marketing",
        },
        {
          NavItem: "Event Based Marketing",
          toggle: { toggle },
          iconClass: "fa-solid fa-bullhorn",
          to: "event-marketing",
        },
      ]}
    />
  </motion.ul>
);

// const itemIds = [0, 1, 2, 3, 4];
