import { motion } from "framer-motion";
import React from "react";
import "./Home.css";

function MainPage() {
  return (
    <>
      <div className="ocean">
        <div className="bubble bubble--1"></div>
        <div className="bubble bubble--2"></div>
        <div className="bubble bubble--3"></div>
        <div className="bubble bubble--4"></div>
        <div className="bubble bubble--5"></div>
        <div className="bubble bubble--6"></div>
        <div className="bubble bubble--7"></div>
        <div className="bubble bubble--8"></div>
        <div className="bubble bubble--9"></div>
        <div className="bubble bubble--10"></div>
        <div className="bubble bubble--11"></div>
        <div className="bubble bubble--12"></div>
        <div className="bubble bubble--13"></div>
        {/* <div id="octocat"></div> */}

        <div className="home-div ">
          <div className="row">
            <div className="home-main col-lg-7 col-md-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className="title">
                GiftH<sub>2</sub>O - A Gift of Life, A Gift of Branding.
              </h1>
              <h4 className="top-title">
                Quenching Thirst, Sparking Impact, and Showcasing Brands.
              </h4>
              <div className="home-btns">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 8 }}
                  className="btn btn-primary btn-home"
                >
                  Advertise With Us &rarr;
                </motion.a>
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 8 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                  className="btn btn-primary btn-home btn-white"
                >
                  Exlpore &rarr;
                </motion.p>
              </div>
            </div>
            <div className="home-img col-lg-5 col-md-6 d-flex justify-content-end">
              <img src="./home-img-copy.png" className="img-fluid " alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
