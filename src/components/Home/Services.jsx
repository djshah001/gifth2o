import React from "react";
// import {ReactComponent as Jotaro} from "./Community.svg"
import { ReactComponent as Bottle } from "./svg/noun-water-bottles-2324733.svg";
import { ReactComponent as Marketing } from "./svg/noun-marketing-6384375.svg";
import { ReactComponent as Customize } from "./svg/noun-customization-5006947.svg";
import { ReactComponent as QrCode } from "./svg/noun-qr-code-6387501.svg";

function Services({topPiece,bottomPiece}) {
  return (
    <>
      <div className="container-fluid">
        <div className="intro blue-div row">
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
          <div className="icon-div col-lg-3 col-md-6 col-sm-12 text-center">
            {/* <i className="fa-solid fa-bottle-water"></i> */}\
            {/* <img src="./svg/noun-houseplants-5767172" alt="" className="" /> */}
            {/* <Jotaro/> */}
            <Bottle />
            <h1 className="icon-text">Premium</h1>
            <h1 className="icon-text">Bottle</h1>
          </div>
          {/* <div className="icon-div col-lg-3 col-md-6 col-sm-12">
                <i className="fa-solid fa-droplet"></i>
                <h1 className="icon-text">Free Pure</h1>
                <h1 className="icon-text">Water</h1>
              </div> */}
          <div className="icon-div col-lg-3 col-md-6 col-sm-12 text-center">
            {/* <i className="fa-solid fa-chart-simple"></i> */}
            <Marketing />
            <h1 className="icon-text">Personalized</h1>
            <h1 className="icon-text">Advertisement</h1>
          </div>
          <div className="icon-div col-lg-3 col-md-6 col-sm-12 text-center">
            {/* <i className="fa-solid fa-qrcode"></i>{" "} */}
            <QrCode />
            <h1 className="icon-text">QR Based</h1>
            <h1 className="icon-text">Digital Marketing</h1>
          </div>
          <div className="icon-div col-lg-3 col-md-6 col-sm-12 text-center">
            {/* <i className="fa-solid fa-qrcode"></i>{" "} */}
            <Customize />
            <h1 className="icon-text">Customization</h1>
            <h1 className="icon-text">options</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
