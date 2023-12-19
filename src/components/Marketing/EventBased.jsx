import React from "react";
import Intro from "../Home/Intro";

const EventBased = () => {
  return (
    <>
      <Intro
        colorDiv="red"
        topPiece={true}
        bottomPiece={false}
        img="./images/personalized.jpg"
        title="Gifth2O – Event-Based Marketing, Unforgettable Experiences."
        discColor="text-white"
        disc1={
          "At Gifth2O, we believe in the power of creating memorable experiences that extend beyond the digital realm. Events are not just occasions; they are opportunities to engage, connect, and leave a lasting impression. Join us in redefining event-based marketing where your brand doesn't just participate; it becomes the highlight, the conversation starter, and the catalyst for positive change."
        }
        disc2=" Gifth2O invites you to go beyond event participation and embrace event-based marketing that transforms your brand into an experience. Join us in creating moments that resonate, conversations that endure, and a brand presence that stands the test of time."
        showbtn={false}
      />
    </>
  );
};

export default EventBased;
