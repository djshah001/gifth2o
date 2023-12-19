import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Partnership = ({
  colorDiv,
  img,
  title,
  disc1,
  disc2,
  showbtn,
  topPiece,
  bottomPiece,
}) => {
  return (
    <div className="container-fluid">
      <div className={` intro ${colorDiv}-div row`}>
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
        <div className="col-md-5 img-div">
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="col-md-7 text-div">
          <h2 className="">{title}</h2>
          <p className="text-ccc">{disc1}</p>
          <p className="text-ccc">{disc2}</p>
          {showbtn && (
            <div className="home-btns">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 8 }}
                className="btn btn-primary btn-home btn-red"
              >
                Start Advertising &rarr;
              </motion.a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partnership;
