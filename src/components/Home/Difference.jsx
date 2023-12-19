import { motion } from "framer-motion";
import React from "react";

const Difference = ({
  colorDiv,
  topPiece,
  title,
  bottomPiece,
  disc,
  differences,
}) => {
  const variants = {
    big: {
      // fontSize: "15rem",
      scale: 2,
      transition: { type: "spring" },
    },
    small: {
      // fontSize: "5rem",
      scale: 1,
      transition: { delay: 0.1, duration: 1, type: "spring" },
    },
  };

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
        <div className="text-div">
          <motion.h2
            variants={variants}
            initial="big"
            whileInView="small"
            className="text-center"
          >
            {title}
          </motion.h2>
          <p className="text-lg-yel">{disc}</p>

          <p className="text-lg-yel">
            Discover the Impact of Branding with Purpose at GiftH2O!
          </p>

          <div className="row list">
            {/* <h4 className="text-lg-yel text-center">
              Here's how we revolutionize your marketing strategy while making a
              positive difference:
            </h4> */}
            {differences.map((diff, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="diff row">
                    <motion.div
                      className={`tilt-${i % 2 === 0 ? 1 : 2}`}
                      initial={{
                        // rotateX: "90deg",
                        rotateY: `${i % 2 === 0 ? "-90deg" : "90deg"}`,
                      }}
                      whileInView={{
                        // rotateX: "0deg",
                        rotateY: `${i % 2 === 0 ? "-45deg" : "45deg"}`,
                        transition: { duration: 1 },
                      }}
                    ></motion.div>
                    <div
                      className={`inside col-md-6 d-grid justify-content-center ${
                        i % 2 === 0 ? "end" : "start"
                      } align-items-center order-md-${i % 2 === 0 ? 1 : 2}`}
                    >
                      <h1 className="number ">{i + 1} </h1>
                    </div>
                    <div
                      className={`inside col-md-6 order-md-${
                        i % 2 === 0 ? 2 : 1
                      }`}
                      style={{ textAlign: `${i % 2 === 0 ? "left" : "right"}` }}
                    >
                      <h1 className="">{diff.name}</h1>
                      <p className="text-white">{diff.disc}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
              // }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
