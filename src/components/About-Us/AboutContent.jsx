import React from "react";
import Intro from "../Home/Intro";
import Partnership from "../Home/Partnership";

const AboutContent = () => {
  return (
    <>
      <Intro
        colorDiv="red"
        topPiece={true}
        bottomPiece={true}
        img="./images/about-image.jpg"
        title="About Us"
        discColor="text-white"
        disc1={
          "Welcome to GiftH2O, where we turn the simple act of        providing water into a powerful marketing tool. Join us in our mission to provide free, clean water to those in need, while giving companies the opportunity to make a lasting impact through branded water bottles."
        }
        disc2="Understand the seamless process of getting your brand's logo on our
        premium water bottles. From choosing the bottle style to final
        delivery, we make it easy for you to make a meaningful impact."
        showbtn={false}
      />
      <Partnership
        colorDiv="pur"
        topPiece={false}
        bottomPiece={false}
        img="./images/mission.jpg"
        title="Our Mission"
        disc1="At the heart of Gifth2O lies a simple yet powerful mission – to provide free water bottles to communities, eradicating the notion of buying water while creating a platform for brands to make a meaningful impact. We are the modern youth of India, committed to reshaping the way we think about water, sustainability, and the role of brands in community well-being."
        showbtn={false}
      />
    </>
  );
};

export default AboutContent;
