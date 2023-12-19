import { motion, useCycle } from "framer-motion";
import React from "react";
import MenuItem from "./MenuItem";

const MenuDropDown = ({ i, MenuItems }) => {
  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

  const style = { border: `2px solid ${colors[i]}` };

  const [Menu, toggleMenu] = useCycle(false, true);

  return (
    <>
      <motion.li
        variants={variants}
        initial={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        // animate={!Menu ? "open" : "closed"}
      >
        <p className="text-placeholder" style={style}>
          Menu
          <motion.i
            variants={{
              rotate1: { rotate: 180 },
              rotate2: { rotate: 0 },
            }}
            animate={Menu ? "rotate1" : "rotate2"}
            transition={{ duration: 0.2 }}
            class="fa-solid fa-caret-down"
          ></motion.i>
          {/* </motion.div> */}
        </p>
      </motion.li>

      {Menu &&
        MenuItems.map((menuItem, i) => {
          return (
            <React.Fragment
            key={i}>
              <motion.div
                initial={{
                  x: 20,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1, transition: { delay: `0.${i}` } }}
              >
                <MenuItem
                  key={i}
                  i={i}
                  NavItem={menuItem.NavItem}
                  toggle={menuItem.toggle}
                  iconClass={menuItem.iconClass}
                  to={menuItem.to}
                />
              </motion.div>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default MenuDropDown;
