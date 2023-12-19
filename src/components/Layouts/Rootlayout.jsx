import React from "react";
import { Outlet } from "react-router-dom";
import { Example } from "../NavBar/Example";

const Rootlayout = () => {
  return (
    <>
      <Example />
      <Outlet />
    </>
  );
};

export default Rootlayout;
