import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Intro({
  colorDiv,
  img,
  title,
  discColor,
  disc1,
  disc2,
  showbtn,
  topPiece,
  bottomPiece,
}) {
  const MotionNavLink = motion(NavLink);
  return (
    <div className="container-fluid">
      <div className={`intro ${colorDiv}-div row`}>
        {bottomPiece && (
          <>
            <div className="piece bottom-piece-1"></div>
            <div className="piece bottom-piece-2"></div>
          </>
        )}
        {topPiece && (
          <>
            <div className="piece top-piece-1"></div>
            <div className="piece top-piece-2"></div>
          </>
        )}
        <div className="text-div col-lg-7 col-md-7 col-sm-12 col-xs-12 order-2 order-sm-2 order-lg-1">
          <h2 className="">{title}</h2>
          <p className={`${discColor}`}>{disc1}</p>

          <p className={`${discColor}`}>{disc2}</p>

          {showbtn && (
            <div className="home-btns">
              <MotionNavLink
                to="/about"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 8 }}
                className="btn btn-primary btn-home btn-red"
              >
                Learn More &rarr;
              </MotionNavLink>
            </div>
          )}
        </div>
        <div className="img-div col-md-5 col-lg-4 col-sm-12 col-xs-12 order-1 order-sm-1 order-lg-2">
          <img src={img} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
