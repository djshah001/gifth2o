import React from "react";
import Intro from "../Home/Intro";
import Partnership from "../Home/Partnership";
import Difference from "../Home/Difference";

const Digital = () => {
  const differences = [
    {
      name: "Unlock New Avenues with QR Code Integration:",
      disc: "Gifth2O brings innovation to the forefront of your digital marketing strategy. Seamlessly integrate QR codes into your branded water bottles, creating a bridge between the physical and digital worlds. Harness the power of QR technology to connect with your audience effortlessly.",
    },
    {
      name: "Direct-to-Consumer Sales:",
      disc: " Capitalize on mobile commerce. With QR codes leading directly to your online store, convert brand visibility into revenue-generating opportunities. Your water bottles become not just a promotional item but a sales catalyst.",
    },
    {
      name: "Exclusive Promotions:",
      disc: " Drive revenue with exclusive digital promotions. QR codes enable targeted discounts, loyalty programs, and time-sensitive offers, encouraging immediate action from your audience.",
    },
    {
      name: "Cross-Channel Marketing:",
      disc: "Integrate QR codes across various digital channels – from social media to email campaigns. Create a cohesive brand experience, driving traffic and revenue from multiple touchpoints.",
    },
  ];
  return (
    <>
      <Intro
        colorDiv="dark"
        topPiece={true}
        bottomPiece={true}
        img="./images/Digital.jpeg"
        title="Gifth2O – Digital Marketing, Redefined."
        discColor="text-ccc"
        // disc1={"Unleash the Power of Digital Marketing with Gifth2O"}
        disc1=" In the era of connectivity, where every click counts, Gifth2O is your gateway to a dynamic and impactful digital marketing journey. We understand that the digital landscape is not just about reaching audiences; it's about creating meaningful connections, driving engagement, and achieving measurable results. Welcome to a world where your brand doesn't just exist online but thrives, leaving a lasting impression."
        showbtn={false}
      />
      <Partnership
        colorDiv="red"
        topPiece={false}
        bottomPiece={true}
        img="./images/partnership.webp"
        title="Digital Transformation"
        disc1="Gifth2O specializes in spearheading your brand's digital transformation. We're not just talking about an online presence; we're talking about a holistic approach that leverages the latest digital strategies to elevate your brand to new heights. From social media brilliance to interactive experiences, we're here to guide your brand through the ever-evolving digital landscape."
        // disc2="We've redefined the concept of corporate social responsibility by
        // offering brands the opportunity to make a meaningful impact. Through
        // personalized and event-based marketing, we empower brands to connect
        // with their audience while contributing to a cause that truly
        // matters."
        showbtn={false}
      />
      <Difference
        colorDiv="dark"
        topPiece={false}
        bottomPiece={false}
        title="Cutting-Edge Strategies"
        disc="Our digital marketing strategies are not just up-to-date; they are ahead of the curve. Whether it's SEO-optimized content, data-driven insights, or innovative campaigns, Gifth2O ensures that your brand stands out in the digital noise. We're not followers; we're trendsetters."
        differences={differences}
      />
    </>
  );
};

export default Digital;
